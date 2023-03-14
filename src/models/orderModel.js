const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    methodPayment: { type: String, required: true },
    orders: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      }
    ]
  },
  {
    versionKey: false,
  }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;