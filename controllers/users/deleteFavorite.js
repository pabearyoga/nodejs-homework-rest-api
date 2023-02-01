const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteFavorite = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const { noticeId } = req.params;

    const { favoriteNotices } = await User.findOne({
      _id: _id,
    });

    const deletedIdIndex = favoriteNotices.findIndex(
      (id) => id === `${noticeId}`
    ); // index

    favoriteNotices.splice(deletedIdIndex, 1);

    const result = await User.findByIdAndUpdate(
      { _id: _id },
      { favoriteNotices: favoriteNotices }
    );
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(favoriteNotices);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteFavorite;
