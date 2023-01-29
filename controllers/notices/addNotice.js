const { Notice } = require("../../models");

const addNotice = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await Notice.create({ ...req.body, owner: _id });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addNotice;
