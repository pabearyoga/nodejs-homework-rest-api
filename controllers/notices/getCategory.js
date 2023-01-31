const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getCategory = async (req, res, next) => {
  try {
    const { categoryName } = req.params;

    const { page = 1, limit = 200, search = "" } = req.query;

    const skip = (page - 1) * limit;
    const result = await Notice.find(
      { category: categoryName, title: { $regex: `${search}` } },
      "",
      {
        skip,
        limit: Number(limit),
      }
    ).populate("owner", "_id email");
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getCategory;
