const Early_Adopters = require('../services/Early_Adopters');

const ordersEarlyAdoptersController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await Early_Adopters.create({ ...body, email });
    res.status(201).json(newOrder);
  }

}

module.exports = ordersEarlyAdoptersController;