const Joi = require('joi');

const schemaOrder = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '404|The "name" field cannot be empty',
    'any.required': '404|The "name" field is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': '404|The "address" field cannot be empty',
    'any.required': '404|The "address" field is required',
  }),
  phone: Joi.string().required().messages({
    'string.empty': '404|The "phone" field cannot be empty',
    'any.required': '404|The "phone" field is required',
  }),
  methodPayment: Joi.string().required().messages({
    'string.empty': '404|The "methodPayment" field cannot be empty',
    'any.required': '404|The "methodPayment" field is required',
  }),
  orders: Joi.array().items(
    Joi.object({
      name: Joi.string().required().messages({
        'string.empty': '404|The "orders.name" field cannot be empty',
        'any.required': '404|The "orders.name" field is required',
      }),
      price: Joi.number().required().messages({
        'number.base': '404|The "price" field must be a number',
        'any.required': '404|The "price" field is required',
      }),
      quantity: Joi.number().required().greater(0).integer()
        .messages({
          'number.base': '404|The "quantity" field must be a number',
          'any.required': '404|The "quantity" field is required',
          'number.greater': '404|The "quantity" field must be greater than 0',
          'number.integer': '404|The "quantity" field must be an integer',
        }),
    }),
  ).messages({
    'array.base': '404|The "orders" field must be an array',
  }),
});

const dataOrder = (body) => {
  const { error, value } = schemaOrder.validate(body);

  if (error) {
    throw error;
  }

  return value;
};

module.exports = dataOrder;
