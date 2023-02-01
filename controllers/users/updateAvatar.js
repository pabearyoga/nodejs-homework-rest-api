const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
// const { avatarImgOptimization } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id: id } = req.user;
  if (!req.file) {
    const tempUpload =
      "../../public/avatars/63ac8476ea0bf78ea4f94a8e_no-profile-pic-icon-11.jpg";
    const imageName = "63ac8476ea0bf78ea4f94a8e_no-profile-pic-icon-11";

    try {
      const resultUpload = path.join(avatarsDir, imageName);
      await fs.rename(tempUpload, resultUpload);
      const avatarURL = path.join(
        __dirname,
        "../../",
        "public",
        "avatars",
        imageName
      );
      await User.findByIdAndUpdate(req.user._id, { avatarURL });
      res.json({ avatarURL });
    } catch (error) {
      next(error);
    }
    return;
  }

  const { path: tempUpload, originalname } = req.file;
  const imageName = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", imageName);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
