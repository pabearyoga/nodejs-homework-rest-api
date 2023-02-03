const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteAvatars = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const result = await User.findByIdAndUpdate(
      { _id: _id },
      { avatarURL: null }
    );

    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json({ avatarURL: null });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteAvatars;
