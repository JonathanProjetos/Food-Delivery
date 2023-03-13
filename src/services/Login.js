const userModel = require("../models/userModel");
const joiUser = require("../middlewares/joiBodyUser");
const createToken = require("../middlewares/token");
const bcryptjs = require("bcryptjs");
const encrypt = require('../middlewares/encrypt')


const LoginServices = {

  Login: async (body) => {
  
    //valido o corpo da requisição
    const check = joiUser(body);

    // console.log('testando', check.password)

    //busco pelo email no banco de dados
    const user = await userModel.findOne({ email: check.email });
    console.log('retorno aqui',user.password);
    //verifico se o email existe
    if(!user) throw new Error("404|Usuario não encontrado");

    //verifico se a senha está correta
    if(!bcryptjs.compareSync(check.password, user.password)) {
      throw new Error("401|Senha incorreta");
    }

    //gero o token
    const token = createToken.generateToken(check.email);

    return token;
  },

}

module.exports = LoginServices;