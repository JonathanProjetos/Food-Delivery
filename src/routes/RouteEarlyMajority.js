const { Router } = require('express');
const ordersEarlyMajorityControllers = require('../controllers/EarlyMajority');
const checkToken = require('../middlewares/checkToken');

const EarlyMajorityRoute = Router();

EarlyMajorityRoute.post('/earlyMajority/order', checkToken.verifyToken, ordersEarlyMajorityControllers.create);
EarlyMajorityRoute.get('/earlyMajority/order', checkToken.verifyToken, ordersEarlyMajorityControllers.getOrders);
EarlyMajorityRoute.delete('/mvp/order/:id', checkToken.verifyToken, ordersEarlyMajorityControllers.deleteOrder);
EarlyMajorityRoute.delete('/mvp/order/product/:id', checkToken.verifyToken, ordersEarlyMajorityControllers.deleteProductOrder);

module.exports = EarlyMajorityRoute;
