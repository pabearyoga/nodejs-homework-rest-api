const { addSchema } = require("../../schemas/contacts");
const { HttpError } = require("../../helpers");

const addContactValidation = (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = addContactValidation;
