const express = require("express");
const { contacts: ctrl } = require("../../controllers/");
const { contacts: mdlwrs } = require("../../middlewares/");
const { register: mdlwrsUsers } = require("../../middlewares/");
const router = express.Router();

router.get("/", mdlwrsUsers.auth, ctrl.getAll);

router.get(
  "/:contactId",
  mdlwrsUsers.auth,
  mdlwrs.contactIdParamValidation,
  ctrl.getById
);

router.post(
  "/",
  mdlwrsUsers.auth,
  mdlwrs.addContactValidation,
  ctrl.addContact
);

router.put(
  "/:contactId",
  mdlwrsUsers.auth,
  mdlwrs.contactIdParamValidation,
  ctrl.updateContact
);

router.patch(
  "/:contactId",
  mdlwrsUsers.auth,
  mdlwrs.objIsEmptyValid,
  mdlwrs.updateStatusContactValid,
  mdlwrs.contactIdParamValidation,
  ctrl.updateStatusContact
);

router.delete(
  "/:contactId",
  mdlwrsUsers.auth,
  mdlwrs.contactIdParamValidation,
  ctrl.deleteContact
);

module.exports = router;
