const { Router } = require('express');
const ordersEarlyAdoptersControllers = require('../controllers/Early_Adopters');
const checkToken = require('../middlewares/checkToken');

const EarlyAdoptersRoute = Router();

EarlyAdoptersRoute.post('/earlyAdopters/orders', checkToken.verifyToken, ordersEarlyAdoptersControllers.create);

module.exports = EarlyAdoptersRoute;