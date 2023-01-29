const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const updateStatusNotice = async (req, res, next) => {
  try {
    const { noticeId } = req.params;
    const { _id } = req.user;
    const result = await Notice.findByIdAndUpdate(
      { _id: noticeId },
      { ...req.body, owner: _id },
      {
        new: true,
      }
    );
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusNotice;
