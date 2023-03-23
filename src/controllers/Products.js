const ProductsServices = require('../services/Products');

const ProductsController = {
  getAll: async (req, res) => {
    const { email } = req.email;

    const allProducts = await ProductsServices.getAll(email);
    res.status(200).json(allProducts);
  },

  create: async (req, res) => {
    const { name, price, description } = req.body;
    const { email } = req.email;

    const newProduct = await ProductsServices.create({
      name, price, description, email,
    });
    res.status(201).json(newProduct);
  },
};

module.exports = ProductsController;
