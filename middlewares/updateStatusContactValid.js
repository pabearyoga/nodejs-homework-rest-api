const { updateStatusContactSchema } = require("../schemas/contacts");
const { HttpError } = require("../helpers");

const updateStatusContactValid = (req, res, next) => {
  const { error } = updateStatusContactSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = updateStatusContactValid;
