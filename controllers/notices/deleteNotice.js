const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteNotice = async (req, res, next) => {
  try {
    const { noticeId } = req.params;
    const { _id } = req.user;
    const result = await Notice.findByIdAndRemove({
      _id: noticeId,
      owner: _id,
    });
    if (result === null) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNotice;
