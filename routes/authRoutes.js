const { Router } = require("express");
const { signup, login, logout } = require("../controllers/authController");

const authRoutes = Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/logout", logout);

module.exports = authRoutes;
