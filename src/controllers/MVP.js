const MVPServices = require('../services/MVP');

const ordersMVPController = {
  createOrder: async (req, res) => {
    const { email } = req;
    const { body } = req;

    const newOrder = await MVPServices.createOrder({ body, email });
    res.status(200).json(newOrder);
  },

  getOrders: async (req, res) => {
    const { email } = req;
    const getOrder = await MVPServices.getOrders(email);
    res.status(200).json(getOrder);
  },

  deleteOrder: async (req, res) => {
    const { email } = req;
    const { id } = req.params;
    const deleteOrder = await MVPServices.deleteOrder({ email, id });
    res.status(200).json(deleteOrder);
  },

  deleteProductOrder: async (req, res) => {
    const { email } = req;
    const { id } = req.params;

    const productId = id;

    const deleteProductOrder = await MVPServices.deleteProductOrder({ email, productId });
    res.status(200).json(deleteProductOrder);
  },

  updateOrder: async (req, res) => {
    const { email } = req;
    const { id } = req.params;
    const { body } = req;

    const updateOrder = await MVPServices.updateOrder(body, id, email);
    res.status(200).json(updateOrder);
  },

  updateProductOrder: async (req, res) => {
    const { email } = req;
    const { id } = req.params;
    const { body } = req;

    const updateProductOrder = await MVPServices.updateProductOrder(body, id, email);
    res.status(200).json(updateProductOrder);
  },

};

module.exports = ordersMVPController;
