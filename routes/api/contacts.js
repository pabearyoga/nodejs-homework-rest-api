const express = require("express");
const { contacts: ctrl } = require("../../controllers/");
const middlewares = require("../../middlewares");
const schema = require("../../schemas/users");

const router = express.Router();

router.get("/", middlewares.auth, ctrl.getAll);

router.get(
  "/:contactId",
  middlewares.auth,
  middlewares.contactIdValidation,
  ctrl.getById
);

router.post(
  "/",
  middlewares.auth,
  middlewares.validation(schema.addSchema),
  ctrl.addContact
);

router.put(
  "/:contactId",
  middlewares.auth,
  middlewares.contactIdValidation,
  ctrl.updateContact
);

router.patch(
  "/:contactId",
  middlewares.auth,
  middlewares.objIsEmptyValid,
  middlewares.validation(schema.updateStatusContactSchema),
  middlewares.contactIdValidation,
  ctrl.updateStatusContact
);

router.delete(
  "/:contactId",
  middlewares.auth,
  middlewares.contactIdValidation,
  ctrl.deleteContact
);

module.exports = router;
