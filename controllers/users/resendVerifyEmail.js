const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw HttpError(404);
    }

    if (user.verify) {
      throw HttpError(400, "Verification has already been passed");
    }

    const verificationToken = user.verificationToken;

    const mail = {
      to: email,
      subject: "Підтверджння регістрації на сайті",
      html: `<a href-"http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Натисніть для верифікації email !</a>`,
    };
    await sendEmail(mail);

    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerifyEmail;
