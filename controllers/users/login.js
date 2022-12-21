const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, `Email or password is wrong`);
    }
    const userPassword = bcrypt.compareSync(password, user.password);
    if (!userPassword) {
      throw HttpError(401, `Email or password is wrong`);
    }

    const { subscription } = user;

    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
      token,
      user: {
        email,
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
