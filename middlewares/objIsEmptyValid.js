const { HttpError } = require("../helpers");

const objIsEmptyValid = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "missing field favorite");
  }
  next();
};

module.exports = objIsEmptyValid;
