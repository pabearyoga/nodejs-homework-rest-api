const Joi = require("joi");

const addSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  birthdate: Joi.date(),
  bread: Joi.string(),
  location: Joi.string(),
  comments: Joi.string().required(),
  price: Joi.number().required(),
  favorite: Joi.boolean(),
});

const updateStatusNoticeSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateStatusNoticeSchema,
};
