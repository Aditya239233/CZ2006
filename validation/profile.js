const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRecommendInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.price = !isEmpty(data.price) ? data.price : "";
  data.location = !isEmpty(data.location) ? data.location : "";

  // Price checks
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  // Location checks
  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
