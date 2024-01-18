const handelErrors = (err) => {
  const errors = {
    email: "",
    password: "",
  };
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.code == 11000) {
    errors.email = "email already exists";
  }
  if (err.message == "incorrect email") {
    errors.email = err.message;
  }
  if (err.message == "incorrect password") {
    errors.password = err.message;
  }

  console.log(err.message);
  return errors;
};
module.exports = handelErrors;
