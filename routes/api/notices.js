const express = require("express");
const { notices: ctrl } = require("../../controllers");
const mdw = require("../../middlewares");
const schema = require("../../schemas/notices");

const router = express.Router();

router.get("/:categoryName", ctrl.getCategory); //
router.get("/:noticeId", mdw.noticeIdValidation, ctrl.getById); //
router.patch(
  "/:noticeId",
  mdw.auth,
  mdw.objIsEmptyValid,
  mdw.validation(schema.updateStatusNoticeSchema),
  mdw.noticeIdValidation,
  ctrl.updateStatusNotice
); //
router.post(
  "/",
  mdw.auth,
  mdw.validation(schema.addSchema),
  mdw.upload.single("avatar"),
  ctrl.addNotice
); //
router.get("/", mdw.auth, ctrl.getAll);
router.delete(
  "/:noticeId",
  mdw.auth,
  mdw.noticeIdValidation,
  ctrl.deleteNotice
); //

module.exports = router;
