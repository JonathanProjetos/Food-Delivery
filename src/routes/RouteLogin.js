const { Router } = require('express');
const LoginController = require('../controllers/Login');

const loginRouter = Router();

loginRouter.post('/login', LoginController.Login);

module.exports = loginRouter;