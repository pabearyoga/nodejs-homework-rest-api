const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { _id } = req.user;
    const result = await Contact.findByIdAndUpdate(
      { _id: contactId },
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

module.exports = updateStatusContact;
