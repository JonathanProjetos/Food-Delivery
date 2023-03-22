const { Router } = require('express');
const ordersLateMajorityControllers = require('../controllers/LateMajority');
const checkToken = require('../middlewares/checkToken');

const LateMajorityRoute = Router();

LateMajorityRoute.post('/lateMajority/orders', checkToken.verifyToken, ordersLateMajorityControllers.create);

module.exports = LateMajorityRoute;
