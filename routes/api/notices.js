const express = require("express");
const { notices: ctrl } = require("../../controllers");
const router = express.Router();

router.get("/", ctrl.getAll);

module.exports = router;
