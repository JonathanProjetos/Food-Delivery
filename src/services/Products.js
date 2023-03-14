const products = require('../models/productModel');


const ProductsServices = {
  getAll: async (email) => {
    if(!email) throw new Error('401|Token not found');
    const allProducts = await products.find();
    return allProducts;
  },
}

module.exports = ProductsServices;