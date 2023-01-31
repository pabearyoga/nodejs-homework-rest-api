const { User } = require("../../models");

const { HttpError } = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const { noticeId } = req.params;

    const { favoriteNotices } = await User.findOne({
      _id: _id,
    });

    const newFavoriteNotices = !favoriteNotices.includes(noticeId)
      ? [...favoriteNotices, noticeId]
      : favoriteNotices;

    const result = await User.findByIdAndUpdate(
      { _id: _id },
      { favoriteNotices: newFavoriteNotices }
    );
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(newFavoriteNotices);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
