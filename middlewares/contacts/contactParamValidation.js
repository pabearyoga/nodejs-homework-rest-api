const contactIdParamValidation = (req, res, next) => {
  const { contactId } = req.params;

  if (!String(contactId)) {
    return res.status(400).json({
      message: 'Incorrect "cotactId", pleace input string !',
    });
  }

  next();
};

module.exports = contactIdParamValidation;
