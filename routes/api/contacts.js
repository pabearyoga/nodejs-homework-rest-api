const express = require("express");
const { contacts: ctrl } = require("../../controllers/");
const middlewares = require("../../middlewares");
const schema = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", middlewares.contactIdValidation, ctrl.getById);

router.post("/", middlewares.validation(schema.addSchema), ctrl.addContact);

router.put("/:contactId", middlewares.contactIdValidation, ctrl.updateContact);

router.patch(
  "/:contactId",
  middlewares.objIsEmptyValid,
  middlewares.validation(schema.updateStatusContactSchema),
  middlewares.contactIdValidation,
  ctrl.updateStatusContact
);

router.delete(
  "/:contactId",
  middlewares.contactIdValidation,
  ctrl.deleteContact
);

module.exports = router;
