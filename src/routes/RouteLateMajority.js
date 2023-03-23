const { Router } = require('express');
const ordersLateMajorityControllers = require('../controllers/LateMajority');
const checkToken = require('../middlewares/checkToken');

const LateMajorityRoute = Router();

LateMajorityRoute.post('/lateMajority/order', checkToken.verifyToken, ordersLateMajorityControllers.create);
LateMajorityRoute.get('/lateMajority/order', checkToken.verifyToken, ordersLateMajorityControllers.getOrders);
LateMajorityRoute.delete('/lateMajority/order/:id', checkToken.verifyToken, ordersLateMajorityControllers.deleteOrder);
LateMajorityRoute.delete('/lateMajority/order/product/:id', checkToken.verifyToken, ordersLateMajorityControllers.deleteProductOrder);

module.exports = LateMajorityRoute;
