const express = require("express");
const Joi = require("joi");

const contacts = require("../../models/contacts");

const router = express.Router();

const addObjData = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params.contactId;
    const result = await contacts.getContactById(contactId);
    if (!result) {
      throw new Error("Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = addObjData.validate(req.query);
    if (error) {
      throw new Error("missing required name field");
    }
    const result = await contacts.addContact(req.query);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params.contactId;
    const result = await contacts.removeContact(contactId);
    if (result === null) {
      throw new Error("Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = addObjData.validate(req.query);
    const { contactId } = req.params.contactId;
    const result = await contacts.updateContact(contactId, req.query);
    if (error) {
      throw new Error("missing fields");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
