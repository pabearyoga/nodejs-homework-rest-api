const { Notice } = require("../../models");

const getById = async (req, res, next) => {
  try {
    console.log(Notice);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
