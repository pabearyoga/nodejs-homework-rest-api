const { Notice } = require("../../models");
const path = require("path");
const fs = require("fs/promises");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const addNotice = async (req, res, next) => {
  const { _id: id } = req.user;

  if (!req.file) {
    const imageName = "63ac8476ea0bf78ea4f94a8e_no-profile-pic-icon-11.jpg";

    try {
      const resultUpload = path.join(avatarsDir, imageName);
      await fs.rename(resultUpload, resultUpload);
      const petsAvatarURL = path.join(
        // __dirname,
        // "../../",
        "public",
        "avatars",
        imageName
      );
      const result = await Notice.create({
        ...req.body,
        petsAvatarURL,
        owner: id,
      });
      res.json(result);
    } catch (error) {
      next(error);
    }
    return;
  }

  const { path: tempUpload, originalname } = req.file;
  const imageName = `${id}_${originalname}`;

  try {
    // const petsAvatarURL = "https://images.app.goo.gl/tZR2WarKP6wYJKA87";
    const resultUpload = path.join(avatarsDir, imageName);
    await fs.rename(tempUpload, resultUpload);
    const petsAvatarURL = path.join("public", "avatars", imageName);
    const { _id } = req.user;
    const result = await Notice.create({
      ...req.body,
      petsAvatarURL,
      owner: _id,
    });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addNotice;
