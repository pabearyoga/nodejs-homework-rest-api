const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateSubscriptionUser = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate({ _id: _id }, req.body, {
      new: true,
    });
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscriptionUser;
