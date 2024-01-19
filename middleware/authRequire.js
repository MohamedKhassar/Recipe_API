const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const authRequire = async (req, res, next) => {
  const { access_token } = req.cookies;
  if (access_token) {
    await jwt.verify(access_token, SECRET_KEY, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: err.message,
        });
      }
      req.decodedToken = decodedToken;
      console.log(req.decodedToken);
      next();
    });
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
  next();
};

module.exports = authRequire;
