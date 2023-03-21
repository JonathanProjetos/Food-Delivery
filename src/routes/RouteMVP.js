const { Router } = require('express');
const ordersMVPControllers = require('../controllers/MVP');
const checkToken = require('../middlewares/checkToken');

const MVPRoute = Router();

MVPRoute.post('/mvp/order', checkToken.verifyToken, ordersMVPControllers.create);
MVPRoute.get('/mvp/order', checkToken.verifyToken, ordersMVPControllers.getOrders);
MVPRoute.delete('/mvp/order/:id', checkToken.verifyToken, ordersMVPControllers.deleteOrder);
MVPRoute.delete('/mvp/order/product/:id', checkToken.verifyToken, ordersMVPControllers.deleteProductOrder);
MVPRoute.put('/mvp/order/:id', checkToken.verifyToken, ordersMVPControllers.updateOrder);

module.exports = MVPRoute;
