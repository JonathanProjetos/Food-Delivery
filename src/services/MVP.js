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
    if(!email) throw new Error('401|Unauthorized');
  
    const users = await user.find();
    const getUserId = await user.findOne({ email });

    // verificando a quantidade de usuários cadastrados
    if(users.length > 100) throw new Error('429|Too many requests');

    const result = await order.create({ 
      name,
      userId: getUserId.id,
      address,
      phone,
      methodPayment,
      orders
    })

    return result
  },

  getOrders: async (email) => {

    const getUserId = await user.findOne({ email });

    if (!getUserId) throw new Error('404|User not found');

    const getOrder = await order.find({ userId: getUserId.id });

    return getOrder;
  },

  deleteOrder: async ({ email, id }) => {
    const getUserId = await user.findOne({ email });
  
    if (!getUserId) throw new Error('404|User not found');

    const getOrderForId = await order.findOne({ userId: getUserId.id });

    if (!getOrderForId) throw new Error('404|Order not found');

    if(getOrderForId.userId !== id) throw new Error('401|Unauthorized');

    const deleteOrder = await order.deleteOne({ userId: getUserId.id });

    return deleteOrder;
  },

  deleteProductOrder: async ({ email, productId }) => {
    const getUser = await user.findOne({ email });
  
    if (!getUser) throw new Error('404|User not found');

    const getOrderForId = await order.findOne({ userId: getUser.id });

    if (!getOrderForId) throw new Error('404|Order not found');

    const itemDestroy = await order.findOneAndUpdate(
      { userId: getOrderForId.userId}, 
      { $pull: { orders: { _id: productId } } }, 
      { new: true} );

    return itemDestroy;
  },

  updateOrder: async (body, id ,email) => {

    checkQuantityItems.bodyMVP(body.orders);

    if(!email) throw new Error('401|Unauthorized');

    const getUser = await user.findOne({ email });
  
    if (!getUser) throw new Error('404|User not found');

    const updateData = await order.findOneAndUpdate(
      { _id: id },
      { $set: { ...body }},
      { new: true }
    )

    return updateData;
  },

  updateProductOrder: async (body, id, email) => {

    console.log(body, id, email);
    if(!email) throw new Error('401|Unauthorized');

    const getUser = await user.findOne({ email });
  
    if (!getUser) throw new Error('404|User not found');

    const getOrderForId = await order.findOne({ userId: getUser.id });

    if (!getOrderForId) throw new Error('404|Order not found');

    const updateData = await order.findOneAndUpdate(
      { userId: getOrderForId.userId, 'orders._id': id },
      { $set: { 'orders.$': { ...body } }},
      { new: true }
    )

    return updateData;
  }

}


module.exports = OrdersMVPServices;