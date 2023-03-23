const { Router } = require('express');
const ordersLateMajorityControllers = require('../controllers/LateMajority');
const checkToken = require('../middlewares/checkToken');

const LateMajorityRoute = Router();

LateMajorityRoute.post('/lateMajority/order', checkToken.verifyToken, ordersLateMajorityControllers.create);
LateMajorityRoute.get('/lateMajority/order', checkToken.verifyToken, ordersLateMajorityControllers.getOrders);
LateMajorityRoute.delete('/lateMajority/order/:id', checkToken.verifyToken, ordersLateMajorityControllers.deleteOrder);
LateMajorityRoute.delete('/lateMajority/order/product/:id', checkToken.verifyToken, ordersLateMajorityControllers.deleteProductOrder);
LateMajorityRoute.put('/lateMajority/order/:id', checkToken.verifyToken, ordersLateMajorityControllers.updateOrder);
LateMajorityRoute.patch('/lateMajority/order/product/:id', checkToken.verifyToken, ordersLateMajorityControllers.updateProductOrder);

module.exports = LateMajorityRoute;
