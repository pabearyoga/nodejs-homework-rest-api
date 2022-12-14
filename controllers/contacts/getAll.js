const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await Contact.find({ owner: _id }).populate(
      "owner",
      "_id email subscription"
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
