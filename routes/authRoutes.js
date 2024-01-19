const { Router } = require("express");
const { signup, login, logout } = require("../controllers/authController");
const authRequire = require("../middleware/authRequire");

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/logout", authRequire, logout);

module.exports = authRoutes;
