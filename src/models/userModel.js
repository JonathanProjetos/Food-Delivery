const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const userModel = model("user", userSchema);

module.exports = userModel;