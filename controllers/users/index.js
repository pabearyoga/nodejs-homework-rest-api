const register = require(".//register");
const login = require(".//login");
const logout = require(".//logout");
const getCurrent = require("./getCurrent");
const updateSubscriptionUser = require("./updateSubscriptionUser");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const updateFavorite = require("./updateFavorite");
const getFavorite = require("./getFavorite");
const deleteFavorite = require("./deleteFavorite");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateSubscriptionUser,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
  updateFavorite,
  getFavorite,
  deleteFavorite,
};
