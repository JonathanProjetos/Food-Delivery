/* eslint-disable max-len */
const { Router } = require('express');
const ordersEarlyMajorityControllers = require('../controllers/EarlyMajority');
const checkToken = require('../middlewares/checkToken');

const EarlyMajorityRoute = Router();

EarlyMajorityRoute.post('/earlyMajority/order', checkToken.verifyToken, ordersEarlyMajorityControllers.createOrder);
EarlyMajorityRoute.get('/earlyMajority/order', checkToken.verifyToken, ordersEarlyMajorityControllers.getOrders);
EarlyMajorityRoute.delete('/earlyMajority/order/:id', checkToken.verifyToken, ordersEarlyMajorityControllers.deleteOrder);
EarlyMajorityRoute.delete('/earlyMajority/order/product/:id', checkToken.verifyToken, ordersEarlyMajorityControllers.deleteProductOrder);
EarlyMajorityRoute.put('/earlyMajority/order/:id', checkToken.verifyToken, ordersEarlyMajorityControllers.updateOrder);
EarlyMajorityRoute.patch('/earlyMajority/order/product/:id', checkToken.verifyToken, ordersEarlyMajorityControllers.updateProductOrder);

module.exports = EarlyMajorityRoute;
