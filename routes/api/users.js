const express = require("express");
const { register: ctrl } = require("../../controllers/");
const { register: mdlwrs } = require("../../middlewares");

const router = express.Router();

router.post("/register", mdlwrs.registerValidation, ctrl.register);

module.exports = router;