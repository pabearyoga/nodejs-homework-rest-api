const getAll = require("./getAll");
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
  getAll,
};
