const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    validate: [isEmail, "please enter a valid email"],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    validate: [isStrongPassword, "please enter a strong password"],
    minLength: [8, "please enter more than 8 characters"],
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
