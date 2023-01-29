const { Notice } = require("../../models");

const getFavorite = async (req, res, next) => {
  try {
    console.log(Notice);
  } catch (error) {
    next(error);
  }
};

module.exports = getFavorite;
