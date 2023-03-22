const earlyAdopters = require('../services/EarlyAdopters');

const ordersEarlyAdoptersController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await earlyAdopters.create({ ...body, email });
    res.status(200).json(newOrder);
  },

};

module.exports = ordersEarlyAdoptersController;
