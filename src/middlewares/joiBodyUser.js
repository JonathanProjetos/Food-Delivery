const Joi = require('joi');

const validateUser = (dados) => {
  const userSchema = Joi.object({
    email: Joi.string().required().email().messages({
      'string.empty': '400|O campo "email" não pode ser vazio',
      'any.required': '400|O campo "email" é obrigatório',
      'string.email': '400|O email deve ter no formato test@test.com',
    }),
    password: Joi.string().required().messages({
      'string.empty': '400|O campo "password" deve ter somente strings',
      'any.required': '400|O campo "password" é obrigatório',
    }),
  });

  const { error, value } = userSchema.validate(dados);

  if (error) {
    throw error;
  }
  return value;
};

module.exports = validateUser;
