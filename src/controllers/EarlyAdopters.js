const earlyAdopters = require('../services/EarlyAdopters');

const ordersEarlyAdoptersController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await earlyAdopters.create({ ...body, email });
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

};

module.exports = ordersEarlyAdoptersController;
