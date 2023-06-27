const order = require('../models/orderModel');
const user = require('../models/userModel');
const checkQuantityItems = require('../middlewares/checkQuantityItems');

const OrdersEarlyAdoptersServices = {

  createOrder: async (body) => {
    const { name, address, phone, methodPayment, email, orders } = body;

    // verificando se a quantidade de itens é maior que 5
    checkQuantityItems.bodyEarlyAdopters(orders);
    // verificando se o token existe
    if (!email) throw new Error('401|Unauthorized');

    const users = await user.find();
    const getUserId = await user.findOne({ email });

    // verificando a quantidade de usuários cadastrados
    if (users.length > 10000) throw new Error('429|Too many requests');

    const result = await order.create({
      name,
      userId: getUserId.id,
      address,
      phone,
      methodPayment,
      orders,
    });

    return result;
  },

  getOrders: async (email) => {
    const getUser = await user.findOne({ email });

    if (!getUser) throw new Error('404|User not found');

    const getOrder = await order.find({ userId: getUser.id });

    return getOrder;
  },

  deleteOrder: async ({ email, id }) => {
    const getUser = await user.findOne({ email });

    if (!getUser) throw new Error('404|User not found');

    const getOrderForId = await order.findOne(
      { userId: getUser.id },
      { _id: id },
    );

    if (!getOrderForId) throw new Error('404|Order not found');

    const deleteOrder = await order.deleteOne({ _id: getOrderForId.id });

    return deleteOrder;
  },

  deleteProductOrder: async ({ email, productId }) => {
    const getUser = await user.findOne({ email });

    if (!getUser) throw new Error('404|User not found');

    const result = await order.updateMany(
      { userId: getUser.id },
      { $pull: { orders: { _id: productId } } },
    );
      console.log(result);
    if (result.nModified === 0) throw new Error('404|Product not found');

    return { message: 'Product deleted' };
  },

  updateOrder: async (body, id, email) => {
    checkQuantityItems.bodyEarlyAdopters(body.orders);

    if (!email) throw new Error('401|Unauthorized');

    const getUser = await user.findOne({ email });

    if (!getUser) throw new Error('404|User not found');

    const updateData = await order.findOneAndUpdate(
      { _id: id },
      { $set: { ...body } },
      { new: true },
    );

    return updateData;
  },

  updateProductOrder: async (body, id, email) => {
    const getUser = await user.findOne({ email });

    if (!getUser) throw new Error('401|Unauthorized');

    const getOrderForId = await order.findOne({ userId: getUser.id });

    if (!getOrderForId) throw new Error('404|Order not found');

    const updateData = await order.findOneAndUpdate(
      { userId: getOrderForId.userId, 'orders._id': id },
      { $set: { 'orders.$': { ...body } } },
      { new: true },
    );

    return updateData;
  },

};

module.exports = OrdersEarlyAdoptersServices;
