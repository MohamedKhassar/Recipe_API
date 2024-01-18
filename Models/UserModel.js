const { default: mongoose } = require("mongoose");
const { isStrongPassword } = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
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

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model("user", UserSchema);

module.exports = User;
