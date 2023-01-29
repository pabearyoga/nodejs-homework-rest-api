const { Notice } = require("../../models");

const deleteNotice = async (req, res, next) => {
  try {
    console.log(Notice);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNotice;
