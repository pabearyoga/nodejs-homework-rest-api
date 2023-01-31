const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
});

const updateSchema = Joi.object({
  email: Joi.string(),
  password: Joi.string().min(6),
  subscription: Joi.string(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionUserSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSubscriptionUserSchema,
  verifyEmailSchema,
  updateSchema,
};
