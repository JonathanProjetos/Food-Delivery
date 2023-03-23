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


};

module.exports = ordersLateMajorityController;
