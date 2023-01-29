const express = require("express");
const { notices: ctrl } = require("../../controllers");
const mdw = require("../../middlewares");
const schema = require("../../schemas/notices");

const router = express.Router();

router.get("/:categoryName", ctrl.getCategory);
router.get("/:noticeId", mdw.noticeIdValidation, ctrl.getById);
router.patch(
  "/:noticeId",
  mdw.objIsEmptyValid,
  mdw.validation(schema.updateStatusNoticeSchema),
  mdw.noticeIdValidation,
  ctrl.updateStatusNotice
);
router.get("/favorite", mdw.auth, ctrl.getFavorite);
router.post("/", mdw.auth, mdw.validation(schema.addSchema), ctrl.addNotice);
router.get("/", mdw.auth, ctrl.getAll);
router.delete("/:noticeId", mdw.noticeIdValidation, ctrl.deleteNotice);

module.exports = router;
