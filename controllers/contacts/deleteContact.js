const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { _id } = req.user;
    const result = await Contact.findByIdAndRemove({
      _id: contactId,
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

module.exports = deleteContact;
