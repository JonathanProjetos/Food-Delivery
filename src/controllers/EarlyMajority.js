const earlyMajority = require('../services/EarlyAdopters');

const ordersEarlyMajorityController = {
  createOrder: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await earlyMajority.createOrder({ ...body, email });
    res.status(200).json(newOrder);
  },

  getOrders: async (req, res) => {
    const { email } = req.email;
    const getOrder = await earlyMajority.getOrders(email);
    res.status(200).json(getOrder);
  },

  deleteOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const deleteOrder = await earlyMajority.deleteOrder({ email, id });
    res.status(200).json(deleteOrder);
  },

  deleteProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;

    const productId = id;

    const deleteProductOrder = await earlyMajority.deleteProductOrder({ email, productId });
    res.status(200).json(deleteProductOrder);
  },

  updateOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const { body } = req;

    const updateOrder = await earlyMajority.updateOrder(body, id, email);
    res.status(200).json(updateOrder);
  },

  updateProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const { body } = req;

    const updateProductOrder = await earlyMajority.updateProductOrder(body, id, email);
    res.status(200).json(updateProductOrder);
  },

};

module.exports = ordersEarlyMajorityController;
