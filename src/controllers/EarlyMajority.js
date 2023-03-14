const Early_Majority = require('../services/EarlyAdopters');

const ordersEarlyMajorityController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await Early_Majority.create({ ...body, email });
    res.status(201).json(newOrder);
  }

}

module.exports = ordersEarlyMajorityController;