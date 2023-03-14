const order = require('../models/orderModel');
const user = require('../models/userModel');
const checkQuantityItems = require('../middlewares/checkQuantityItems');


const OrdersMVPServices = {

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
    checkQuantityItems.bodyMVP(orders);
    // verificando se o token existe
    if(!email) throw new Error('401|Token not found');
  
    const users = await user.find();
    const getUserId = await user.findOne({ email });

    // verificando a quantidade de usuários cadastrados
    if(users.length > 100) throw new Error('429|Too many requests');

    await order.create({ 
      name,
      userId: getUserId.id,
      address,
      phone,
      methodPayment,
      orders
    })

  }
}


module.exports = OrdersMVPServices;