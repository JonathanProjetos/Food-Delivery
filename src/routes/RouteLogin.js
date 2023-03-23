const { Router } = require('express');
const LoginController = require('../controllers/Login');
const checkToken = require('../middlewares/checkToken');

const loginRouter = Router();

loginRouter.post('/login', LoginController.Login);
loginRouter.get('/login/validate', checkToken.verifyToken, LoginController.CheckAcessLogin);
loginRouter.post('/register', LoginController.Register);

module.exports = loginRouter;
