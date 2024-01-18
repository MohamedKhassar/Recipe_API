const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");
const handelErrors = require("../middleware/handelErrors");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const createToken = (id) => {
  const token = jwt.sign({ id }, SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("access_token", token, {
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json(user);
  } catch (error) {
    const errors = handelErrors(error);
    res.json(errors);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("access_token", token, {
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json(user);
  } catch (error) {
    const errors = handelErrors(error);
    res.json(errors);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token");
  res.json({ message: "you loggedOut" });
};

module.exports = {
  login,
  signup,
  logout,
};
