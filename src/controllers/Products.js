const ProductsServices = require('../services/Products');


const ProductsController = {
  getAll: async (req, res) => {
    const { email } = req.email;

    const allProducts = await ProductsServices.getAll(email);
    res.status(200).json(allProducts);
  }
}

module.exports = ProductsController;