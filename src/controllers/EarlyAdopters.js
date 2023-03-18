const Early_Adopters = require('../services/EarlyAdopters');

const ordersEarlyAdoptersController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await Early_Adopters.create({ ...body, email });
    res.status(200).json(newOrder);
  }

}

module.exports = ordersEarlyAdoptersController;