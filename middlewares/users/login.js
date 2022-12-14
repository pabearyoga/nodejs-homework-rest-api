const { loginSchema } = require("../../schemas/users");
const { HttpError } = require("../../helpers");

const loginValidation = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = loginValidation;
