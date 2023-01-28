// const { Contact } = require("../../models");
const { Notices } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    console.log(Notices);
    // const { _id } = req.user;
    // const {
    //   page = 1,
    //   limit = 200,
    //   favorite = { $exists: true || false },
    // } = req.query;
    // const skip = (page - 1) * limit;
    // const result = await Contact.find({ owner: _id, favorite: favorite }, "", {
    //   skip,
    //   limit: Number(limit),
    // }).populate("owner", "_id email subscription");
    // res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
