const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");

const register = async (req, res, next) => {
  try {
    const { email, password, subscription = "starter" } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, `Email ${email} in use`);
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const avatarURL = gravatar.url(email);
    const verificationToken = uuidv4();
    await User.create({
      email,
      password: hashPassword,
      subscription,
      avatarURL,
      verificationToken,
    });

    const mail = {
      to: email,
      subject: "Підтверджння регістрації на сайті",
      html: `<a href-"http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Натисніть для верифікації email !</a>`,
    };
    await sendEmail(mail);

    res.status(201).json({
      user: {
        email,
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
