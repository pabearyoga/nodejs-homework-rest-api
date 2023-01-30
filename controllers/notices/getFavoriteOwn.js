const { Notice } = require("../../models");

const getFavoriteOwn = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const {
      page = 1,
      limit = 200,
      favorite = { $exists: true || false },
      // category = { $exists: "sell" || "lost-found" || "for-free" },
    } = req.query;

    const skip = (page - 1) * limit;
    const result = await Notice.find({ owner: _id, favorite: favorite }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getFavoriteOwn;
