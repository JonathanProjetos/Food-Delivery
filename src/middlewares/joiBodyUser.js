const Joi = require('joi');

const validateUser = (dados) => {
  const userSchema = Joi.object({
    email: Joi.string().required().email().messages({
      'string.empty': '400|The "email" field cannot be empty.',
      'any.required': '400|The "email" field is mandatory.',
      'string.email': '400|The "email" must be in the format test@test.com.',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': '400|The "password" field cannot be empty.',
      'any.required': '400|The "password" field is mandatory.',
      'string.min': '400|The "password" field must be at least 6 characters.',
    }),
  });

  const { error, value } = userSchema.validate(dados);

  if (error) {
    throw error;
  }
  return value;
};

module.exports = validateUser;
