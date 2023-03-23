const { Router } = require('express');
const ordersEarlyMajorityControllers = require('../controllers/EarlyMajority');
const checkToken = require('../middlewares/checkToken');

const EarlyMajorityRoute = Router();

EarlyMajorityRoute.post('/earlyMajority/order', checkToken.verifyToken, ordersEarlyMajorityControllers.create);
EarlyMajorityRoute.get('/earlyMajority/order', checkToken.verifyToken, ordersEarlyMajorityControllers.getOrders);

module.exports = EarlyMajorityRoute;
