const express = require("express");
const { register: ctrl } = require("../../controllers/");
const { register: mdlwrs } = require("../../middlewares");

const router = express.Router();

router.post("/register", mdlwrs.registerValidation, ctrl.register);
router.get("/login", mdlwrs.loginValidation, ctrl.login);
router.post("/logout", mdlwrs.auth, ctrl.logout);
router.get("/current", mdlwrs.auth, ctrl.getCurrent);

module.exports = router;
