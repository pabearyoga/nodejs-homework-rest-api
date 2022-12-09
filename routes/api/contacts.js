const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const middlewares = require("../../middlewares");

router.get("/", ctrl.getAll);

router.get("/:contactId", middlewares.contactIdParamValidation, ctrl.getById);

router.post("/", middlewares.addContactValidation, ctrl.addContact);

router.put(
  "/:contactId",
  middlewares.contactIdParamValidation,
  ctrl.updateContact
);

router.patch(
  "/:contactId",
  middlewares.contactIdParamValidation,
  ctrl.updateStatusContact
);

router.delete(
  "/:contactId",
  middlewares.contactIdParamValidation,
  ctrl.deleteContact
);

module.exports = router;
