const order = require('../models/orderModel');
const user = require('../models/userModel');
const checkQuantityItems = require('../middlewares/checkQuantityItems');

const OrdersLateMajorityServices = {

  create: async (body) => {
    const {
      name,
      address,
      phone,
      methodPayment,
      email,
      orders,
    } = body;

    // verificando se a quantidade de itens é maior que 5
    checkQuantityItems.bodyLateMajority(orders);
    // verificando se o token existe
    if (!email) throw new Error('401|Unauthorized');

    const getUserId = await user.findOne({ email });

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
};

module.exports = OrdersLateMajorityServices;
