const { Router } = require('express');
const LoginController = require('../controllers/Login');

const loginRouter = Router();

loginRouter.post('/login', LoginController.Login);
loginRouter.post('/register', LoginController.Register);

module.exports = loginRouter;