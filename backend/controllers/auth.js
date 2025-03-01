const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    // if user already exist, send error
    if (user) {
      return res
        .status(409)
        .json({ message: "User already exist", success: false });
    }

    // creating new user
    const newUser = new User({ name, email, password });
    // encrypting the password before storing it
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();

    res
      .status(201)
      .json({ message: "user created successfully", success: true });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server side error creating user: ", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // if user already exist, send error
    if (!user) {
      return res
        .status(403)
        .json({ message: "User does not exist", success: false });
    }

    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
      if (!user) {
        return res
          .status(403)
          .json({ message: "User does not exist", success: false });
      }
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res
      .status(200)
      .json({
        message: "login successfully",
        success: true,
        jwtToken,
        email,
        name: user.name,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server side error creating user: ", error });
  }
};
