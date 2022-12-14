const express = require("express");
const { contacts: ctrl } = require("../../controllers/");
const { contacts: mdlwrs } = require("../../middlewares/");
// const mdlwrs = require("../../middlewares");
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", mdlwrs.contactIdParamValidation, ctrl.getById);

router.post("/", mdlwrs.addContactValidation, ctrl.addContact);

router.put("/:contactId", mdlwrs.contactIdParamValidation, ctrl.updateContact);

router.patch(
  "/:contactId",
  mdlwrs.objIsEmptyValid,
  mdlwrs.updateStatusContactValid,
  mdlwrs.contactIdParamValidation,
  ctrl.updateStatusContact
);

router.delete(
  "/:contactId",
  mdlwrs.contactIdParamValidation,
  ctrl.deleteContact
);

module.exports = router;
