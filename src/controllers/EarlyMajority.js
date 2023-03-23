const earlyMajority = require('../services/EarlyAdopters');

const ordersEarlyMajorityController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await earlyMajority.create({ ...body, email });
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

};

module.exports = ordersEarlyMajorityController;
