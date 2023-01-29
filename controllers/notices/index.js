const getAll = require("./getAll");
const getById = require("./getById");
const getFavorite = require("./getFavorite");
const addNotice = require("./addNotice");
// const updateContact = require("./updateContact");
const deleteNotice = require("./deleteNotice");
const updateStatusNotice = require("./updateStatusNotice");
const getCategory = require("./getCategory");

module.exports = {
  getCategory,
  getById,
  getFavorite,
  addNotice,
  //   updateContact,
  deleteNotice,
  updateStatusNotice,
  getAll,
};
