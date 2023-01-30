const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { noticeId } = req.params;

    const result = await Notice.findOne({
      _id: noticeId,
    });
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
