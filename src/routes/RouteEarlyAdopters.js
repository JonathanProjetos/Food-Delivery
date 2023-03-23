const { Router } = require('express');
const ordersEarlyAdoptersControllers = require('../controllers/EarlyAdopters');
const checkToken = require('../middlewares/checkToken');

const EarlyAdoptersRoute = Router();

EarlyAdoptersRoute.post('/earlyAdopters/order', checkToken.verifyToken, ordersEarlyAdoptersControllers.create);
EarlyAdoptersRoute.get('/earlyAdopters/order', checkToken.verifyToken, ordersEarlyAdoptersControllers.getOrders);
EarlyAdoptersRoute.delete('/earlyAdopters/order/:id', checkToken.verifyToken, ordersEarlyAdoptersControllers.deleteOrder);

module.exports = EarlyAdoptersRoute;
