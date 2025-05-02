"use strict";
const CustomError = require("../errors/customError");

module.exports = function (password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(password))
    throw new CustomError(
      "Password must be at least 8 characters long and contain at least one special character and  at least one uppercase character",
      400,
    );
  else return null;
};
