const { Notice } = require("../../models");

const getCategory = async (req, res, next) => {
  try {
    console.log(Notice);
  } catch (error) {
    next(error);
  }
};

module.exports = getCategory;
