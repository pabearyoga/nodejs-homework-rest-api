const { Notice } = require("../../models");

const updateStatusNotice = async (req, res, next) => {
  try {
    console.log(Notice);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusNotice;
