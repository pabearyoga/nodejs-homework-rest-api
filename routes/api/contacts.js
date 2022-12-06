const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const {
  contactIdParamValidation,
} = require("../../middlewares/contactParamValidation");

router.get("/", ctrl.getAll);

router.get("/:contactId", contactIdParamValidation, ctrl.getById);

router.post("/", ctrl.addContact);

router.put("/:contactId", contactIdParamValidation, ctrl.updateContact);

router.delete("/:contactId", contactIdParamValidation, ctrl.deleteContact);

module.exports = router;
