const order = require('../models/orderModel');
const user = require('../models/userModel');
const checkQuantityItems = require('../middlewares/checkQuantityItems');


const OrdersEarlyAdoptersServices = {

  create: async (body) => {
    const { 
      name,
      address,
      phone,
      methodPayment,
      email,
      orders
     } = body;
    
    // verificando se a quantidade de itens é maior que 5
    checkQuantityItems.bodyEarlyAdopters(orders);
    // verificando se o token existe
    if(!email) throw new Error('401|Token not found');
  
    const users = await user.find();
    const getUserId = await user.findOne({ email });

    // verificando a quantidade de usuários cadastrados
    if(users.length > 10000) throw new Error('429|Too many requests');

    const result = await order.create({ 
      name,
      userId: getUserId.id,
      address,
      phone,
      methodPayment,
      orders
    })

    return result;
  }
}


module.exports = OrdersEarlyAdoptersServices;