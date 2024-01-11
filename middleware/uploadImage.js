const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

var upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png"||file.mimetype == "image/gif") {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;
