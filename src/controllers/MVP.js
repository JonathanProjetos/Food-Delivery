const MVPServices = require('../services/MVP');

const ordersMVPController = {
  create: async (req, res) => {
    const { email } = req.email;
    const { body } = req;

    const newOrder = await MVPServices.create({ ...body, email });
    res.status(201).json(newOrder);
  }

}

module.exports = ordersMVPController;