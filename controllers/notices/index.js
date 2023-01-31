const getOwn = require("./getOwn");
const getCategory = require("./getCategory");
const getById = require("./getById");
const addNotice = require("./addNotice");
const deleteNotice = require("./deleteNotice");
const updateStatusNotice = require("./updateStatusNotice");

module.exports = {
  getCategory,
  getById,
  addNotice,
  deleteNotice,
  updateStatusNotice,
  getOwn,
};
