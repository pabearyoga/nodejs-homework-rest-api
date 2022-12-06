const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");
const { addSchema } = require("../../middlewares/contactQueryValidation");

const addContact = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.query);
    if (error) {
      throw HttpError(400, error.message);
    }
    const result = await contacts.addContact(req.query);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
