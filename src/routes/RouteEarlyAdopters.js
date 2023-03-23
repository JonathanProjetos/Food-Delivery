const { Router } = require('express');
const ordersEarlyAdoptersControllers = require('../controllers/EarlyAdopters');
const checkToken = require('../middlewares/checkToken');

const EarlyAdoptersRoute = Router();

EarlyAdoptersRoute.post('/earlyAdopters/orders', checkToken.verifyToken, ordersEarlyAdoptersControllers.create);
EarlyAdoptersRoute.get('/earlyAdopters/order', checkToken.verifyToken, ordersEarlyAdoptersControllers.getOrders);
module.exports = EarlyAdoptersRoute;
