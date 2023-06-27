const lateMajority = require('../services/LateMajority');

const ordersLateMajorityController = {
  createOrder: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await lateMajority.createOrder({ ...body, email });
    res.status(200).json(newOrder);
  },

  getOrders: async (req, res) => {
    const { email } = req.email;
    const getOrder = await lateMajority.getOrders(email);
    res.status(200).json(getOrder);
  },

  deleteOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const deleteOrder = await lateMajority.deleteOrder({ email, id });
    res.status(200).json(deleteOrder);
  },

  deleteProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;

    const productId = id;

    const deleteProductOrder = await lateMajority.deleteProductOrder({ email, productId });
    res.status(200).json(deleteProductOrder);
  },

  updateOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const { body } = req;

    const updateOrder = await lateMajority.updateOrder(body, id, email);
    res.status(200).json(updateOrder);
  },

  updateProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const { body } = req;

    const updateProductOrder = await lateMajority.updateProductOrder(body, id, email);
    res.status(200).json(updateProductOrder);
  },
};

module.exports = ordersLateMajorityController;
