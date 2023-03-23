const lateMajority = require('../services/LateMajority');

const ordersLateMajorityController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await lateMajority.create({ ...body, email });
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
};

module.exports = ordersLateMajorityController;
