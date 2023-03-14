const { Router } = require('express');
const ProductsController = require('../controllers/Products');
const checkToken = require('../middlewares/checkToken');

const productsRouter = Router();

productsRouter.post('/products', checkToken.verifyToken, ProductsController.create);
productsRouter.get('/products', checkToken.verifyToken, ProductsController.getAll)

module.exports = productsRouter;