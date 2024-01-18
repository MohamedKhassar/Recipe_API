const User = require("../Models/UserModel");
const handelErrors = require("../middleware/handelErrors");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.create({ email, password });
    res.json("created");
  } catch (error) {
    const errors = handelErrors(error);
    res.json(errors);
  }
};

const login = (req, res) => {
  res.send("login");
};

const logout = (req, res) => {
  res.send("logout");
};

module.exports = {
  login,
  signup,
  logout,
};
