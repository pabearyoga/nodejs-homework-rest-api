const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { _id } = req.user;

    const result = await Contact.findOne({
      _id: contactId,
      owner: _id,
    }).populate("owner", "_id email subscription");
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
