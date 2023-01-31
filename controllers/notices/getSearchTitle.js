const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getSearchTitle = async (req, res, next) => {
  try {
    const { searchWords } = req.params;

    const { page = 1, limit = 200 } = req.query;

    const skip = (page - 1) * limit;
    const result = await Notice.find(
      { title: { $regex: `${searchWords}` } },
      "",
      {
        skip,
        limit: Number(limit),
      }
    );
    res.json(result);
    if (!result) {
      throw HttpError(404, "Not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getSearchTitle;
