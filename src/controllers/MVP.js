const MVPServices = require('../services/MVP');

const ordersMVPController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await MVPServices.create({ ...body, email });
    res.status(200).json(newOrder);
  },

  getOrders: async (req, res) => {
    const { email } = req.email;
    const getOrder = await MVPServices.getOrders(email);
    res.status(200).json(getOrder);
  },

}

module.exports = ordersMVPController;