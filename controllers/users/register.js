const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  try {
    const { email, password, subscription = "starter" } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw HttpError(409, `Email ${email} in use`);
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({ email, password: hashPassword, subscription });

    res.status(201).json({
      // status: "success",
      // code: 201,
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
