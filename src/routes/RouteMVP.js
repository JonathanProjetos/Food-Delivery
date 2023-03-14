const { Router } = require('express');
const ordersMVPControllers = require('../controllers/MVP');
const checkToken = require('../middlewares/checkToken');

const MVPRoute = Router();

MVPRoute.post('/mvp/orders', checkToken.verifyToken, ordersMVPControllers.create);

module.exports = MVPRoute;