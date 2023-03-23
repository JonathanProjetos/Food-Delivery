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

};

module.exports = ordersEarlyMajorityController;
