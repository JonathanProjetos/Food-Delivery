const { Router } = require('express');
const ordersLateMajorityControllers = require('../controllers/LateMajority');
const checkToken = require('../middlewares/checkToken');

const LateMajorityRoute = Router();

LateMajorityRoute.post('/lateMajority/order', checkToken.verifyToken, ordersLateMajorityControllers.create);
LateMajorityRoute.get('/lateMajority/order', checkToken.verifyToken, ordersLateMajorityControllers.getOrders);

module.exports = LateMajorityRoute;
