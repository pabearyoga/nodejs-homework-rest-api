const { updateSubscriptionUserSchema } = require("../../schemas/users");
const { HttpError } = require("../../helpers");

const updateSubscriptionUserValid = (req, res, next) => {
  const { error } = updateSubscriptionUserSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = updateSubscriptionUserValid;
