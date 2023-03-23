const { Router } = require('express');
const ordersEarlyMajorityControllers = require('../controllers/EarlyMajority');
const checkToken = require('../middlewares/checkToken');

const EarlyMajorityRoute = Router();

EarlyMajorityRoute.post('/earlyMajority/orders', checkToken.verifyToken, ordersEarlyMajorityControllers.create);

module.exports = EarlyMajorityRoute;
