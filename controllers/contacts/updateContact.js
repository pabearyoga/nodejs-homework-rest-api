const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");
const { updateSchema } = require("../../schemas/contacts");

const updateContact = async (req, res, next) => {
  try {
    const { error } = updateSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { _id } = req.user;
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(
      { owner: _id, _id: contactId },
      req.body,
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

module.exports = updateContact;
