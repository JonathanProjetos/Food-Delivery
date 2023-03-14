const products = require('../models/productModel');


const ProductsServices = {
  getAll: async (email) => {
    if(!email) throw new Error('401|Token not found');
    const allProducts = await products.find();
    return allProducts;
  },

  create: async (product) => {
    const { name, price, description, email } = product;
    if(!email) throw new Error('401|Token not found');
    
    const allProducts = await products.find();

    const checkProduct = allProducts.find((product) => product.name.toLowerCase() === name.toLowerCase());

    if(checkProduct) throw new Error('409|Product already exists');


    const newProduct = await products.create({ name, price, description });
    return newProduct;
  }
}

module.exports = ProductsServices;