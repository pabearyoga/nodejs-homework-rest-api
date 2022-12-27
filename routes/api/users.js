const express = require("express");
const { register: ctrl } = require("../../controllers/");
const middlewares = require("../../middlewares");
const schema = require("../../schemas/users");

const router = express.Router();

router.post(
  "/register",
  middlewares.validation(schema.registerSchema),
  ctrl.register
);
router.get("/login", middlewares.validation(schema.loginSchema), ctrl.login);
router.post("/logout", middlewares.auth, ctrl.logout);
router.get("/current", middlewares.auth, ctrl.getCurrent);
router.patch(
  "/",
  middlewares.auth,
  middlewares.objIsEmptyValid,
  middlewares.validation(schema.updateSubscriptionUserSchema),
  ctrl.updateSubscriptionUser
);
router.patch(
  "/avatars",
  middlewares.auth,
  middlewares.upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
