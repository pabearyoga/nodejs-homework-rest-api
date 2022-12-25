const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const { avatarImgOptimization } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;
  const { file } = req;
  try {
    await avatarImgOptimization({ file, size: 250 });
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURl = path.join("public", "avatars", imageName);
    await User.findByIdAndUpdate(req.user._id, { avatarURl });
    res.json({ avatarURl });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
