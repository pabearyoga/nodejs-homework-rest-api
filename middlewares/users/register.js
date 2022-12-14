const { registerSchema } = require("../../schemas/users");
const { HttpError } = require("../../helpers");

const registerValidation = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = registerValidation;
