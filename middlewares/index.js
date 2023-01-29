const validation = require("./validation");
const auth = require("./auth");
const contactIdValidation = require("./contactIdValidation");
const noticeIdValidation = require("./noticeIdValidation");
const objIsEmptyValid = require("./objIsEmptyValid");
const upload = require("./upload");

module.exports = {
  validation,
  auth,
  contactIdValidation,
  objIsEmptyValid,
  upload,
  noticeIdValidation,
};
