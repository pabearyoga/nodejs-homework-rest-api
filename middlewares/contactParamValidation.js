const contactIdParamValidation = (req, res, next) => {
  const { contactId } = req.params;

  if (!Number(contactId)) {
    return res.status(400).json({
      message: 'Incorrect "cotactId", pleace input number !',
    });
  }

  next();
};

module.exports = { contactIdParamValidation };
