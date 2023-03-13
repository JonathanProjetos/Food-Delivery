const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const productModel = model("product", productSchema);

module.exports = productModel;