const earlyAdopters = require('../services/EarlyAdopters');

const ordersEarlyAdoptersController = {
  createOrder: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await earlyAdopters.createOrder({ ...body, email });
    res.status(200).json(newOrder);
  },

  getOrders: async (req, res) => {
    const { email } = req.email;
    const getOrder = await earlyAdopters.getOrders(email);
    res.status(200).json(getOrder);
  },

  deleteOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const deleteOrder = await earlyAdopters.deleteOrder({ email, id });
    res.status(200).json(deleteOrder);
  },

  deleteProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;

    const productId = id;

    const deleteProductOrder = await earlyAdopters.deleteProductOrder({ email, productId });
    res.status(200).json(deleteProductOrder);
  },

  updateOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const { body } = req;

    const updateOrder = await earlyAdopters.updateOrder(body, id, email);
    res.status(200).json(updateOrder);
  },

  updateProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const { body } = req;

    const updateProductOrder = await earlyAdopters.updateProductOrder(body, id, email);
    res.status(200).json(updateProductOrder);
  },

};

module.exports = ordersEarlyAdoptersController;
