const { Notice } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { page = 1, limit = 200, search = "" } = req.query;

    const skip = (page - 1) * limit;
    const result = await Notice.find({ title: { $regex: `${search}` } }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
