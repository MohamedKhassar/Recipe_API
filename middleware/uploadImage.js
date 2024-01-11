// Importing multer for handling multipart/form-data, which is primarily used for uploading files
const multer = require("multer");

// Importing path for handling file paths
const path = require("path");

// Setting up disk storage for multer to store the uploaded files on disk
var storage = multer.diskStorage({
  // Destination function to specify where to store the uploaded files
  destination: function (req, file, cb) {
    // Callback function to specify the destination path
    cb(null, "uploads/"); // The uploaded files will be stored in the "uploads" folder
  },

  // Filename function to specify the name of the uploaded files
  filename: function (req, file, cb) {
    // Getting the file extension
    let ext = path.extname(file.originalname);
    // Generating a unique filename for each uploaded file by combining the current timestamp and the file extension
    cb(null, Date.now() + ext);
  },
});

// Setting up the multer instance with the storage configuration and additional options
var upload = multer({
  // Using the storage configuration
  storage,

  // File filter function to accept only image files with jpeg, png, or gif format
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/gif"
    ) {
      // Callback function to accept the file
      callback(null, true);
    } else {
      // Callback function to reject the file
      callback(null, false);
    }
  },

  // Limits function to set limits on the uploaded files
  limits: {
    // Setting a limit of 2MB on the file size
    fileSize: 1024 * 1024 * 2,
  },
});

// Exporting the multer instance to be used in other modules
module.exports = upload;