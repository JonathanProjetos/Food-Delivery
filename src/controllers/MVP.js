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

  deleteOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;
    const deleteOrder = await MVPServices.deleteOrder({ email, id });
    res.status(200).json(deleteOrder);
  },

  deleteProductOrder: async (req, res) => {
    const { email } = req.email;
    const { id } = req.params;

    const productId = id

    const deleteProductOrder = await MVPServices.deleteProductOrder({ email, productId });
    res.status(200).json(deleteProductOrder);
  },
  

}

module.exports = ordersMVPController;