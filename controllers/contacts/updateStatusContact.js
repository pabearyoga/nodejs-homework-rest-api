const Contact = require("../../models/contact");
const { HttpError } = require("../../helpers");
const { updateStatusContactSchema } = require("../../schemas/contacts");

const updateStatusContact = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "missing field favorite");
    }

    const { error } = updateStatusContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(
      { _id: contactId },
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

module.exports = updateStatusContact;
