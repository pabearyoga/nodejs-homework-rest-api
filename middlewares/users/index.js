const registerValidation = require("./register");
const loginValidation = require("./login");
const auth = require("./auth");
const updateSubscriptionUserValid = require("./updateSubscriptionUserValid");

module.exports = {
  registerValidation,
  loginValidation,
  auth,
  updateSubscriptionUserValid,
};
