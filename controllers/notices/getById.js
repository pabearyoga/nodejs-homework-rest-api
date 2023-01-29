const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { noticeId } = req.params;
    console.log(req.user);
    // const { _id } = req.user;

    const result = await Notice.findOne({
      _id: noticeId,
      // owner: _id,
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
