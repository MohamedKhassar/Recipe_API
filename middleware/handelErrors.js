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
  return errors;
};
module.exports = handelErrors;
