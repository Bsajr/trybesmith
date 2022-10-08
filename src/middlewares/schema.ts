import Joi from 'joi';

const schemaLogin = Joi.object({
  username: Joi.string().required().messages({
    'string-empty': '"username" is required',
  }),
  password: Joi.string().required().messages({
    'string-empty': '"password" is required',
  }),
});

export default {
  schemaLogin,
};