const bcryptjs = require('bcryptjs');
const userModel = require('../models/userModel');
const joiUser = require('../middlewares/joiBodyUser');
const createToken = require('../middlewares/token');
const encrypt = require('../middlewares/encrypt');

const LoginServices = {

  Login: async (body) => {
    // valido o corpo da requisição
    const check = joiUser(body);

    // busco pelo email no banco de dados
    const user = await userModel.findOne({ email: check.email });

    // verifico se o email existe
    if (!user) throw new Error('404|user not found');

    // verifico se a senha está correta
    if (!bcryptjs.compareSync(check.password, user.password)) {
      throw new Error('401|Senha incorreta');
    }

    // gero o token
    const token = createToken.generateToken(check.email);

    return token;
  },

  CheckAcessLogin: async (email) => {
    // busco pelo email no banco de dados
    const user = await userModel.findOne({ email });

    if (!user) throw new Error('401| unauthorized');

    return { message: 'ok' };
  },

  Register: async (body) => {
    // valido o corpo da requisição
    const check = joiUser(body);
    console.log(check);

    // busco pelo email no banco de dados
    const user = await userModel.findOne({ email: check.email });

    // verifico se o email existe
    if (user) throw new Error('409|user already registered');

    // criptografo a senha
    const password = encrypt(check.password);

    // crio o usuario
    await userModel.create({ email: check.email, password });

    return { message: 'successfully registered user' };
  },

};

module.exports = LoginServices;
