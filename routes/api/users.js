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

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/verify",
  middlewares.validation(schema.verifyEmailSchema),
  ctrl.resendVerifyEmail
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

router.patch("/favorite/:noticeId", middlewares.auth, ctrl.updateFavorite);
router.get("/favorite", middlewares.auth, ctrl.getFavorite);
router.delete("/favorite", middlewares.auth, ctrl.deleteFavorite);

module.exports = router;
