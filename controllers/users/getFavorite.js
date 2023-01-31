const { Notice, User } = require("../../models");
const { HttpError } = require("../../helpers");

const getFavorite = async (req, res, next) => {
  try {
    const { page = 1, limit = 200 } = req.query;
    const { _id } = req.user;

    const { favoriteNotices } = await User.findOne({
      _id: _id,
    });

    const skip = (page - 1) * limit;
    const result = await Notice.find(
      { _id: favoriteNotices.map((noticeId) => noticeId) },
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

module.exports = getFavorite;
