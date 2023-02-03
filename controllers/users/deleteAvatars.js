const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteAvatars = async (req, res, next) => {
  try {
    const { _id } = req.user;

    const result = await User.findByIdAndUpdate(_id, { avatarURl: null });

    if (result === null) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteAvatars;
