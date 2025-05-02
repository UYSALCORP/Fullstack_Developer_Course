"use strict";

const CustomError = require("../errors/customError");

module.exports = (startDate, endDate) => {
  if (!startDate || !endDate) {
    throw new CustomError("Both startDate and endDate are required", 400);
  }

  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new CustomError("Invalid date format", 400);
  }

  today.setHours(0, 0, 0, 0);

  if (start >= end) {
    throw new CustomError("startDate must be earlier than endDate", 400);
  }

  if (start < today || end < today) {
    throw new CustomError("Dates must not be in the past", 400);
  }
  const diffTime = Math.abs(end - start);
  const reservedDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return [start, end, reservedDays];
};
