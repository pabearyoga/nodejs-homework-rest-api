const { Notice } = require("../../models");

const addNotice = async (req, res, next) => {
  try {
    console.log(Notice);
  } catch (error) {
    next(error);
  }
};

module.exports = addNotice;
