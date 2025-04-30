"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const transporter = require("../configs/nodemailer");

module.exports = function sendMail(to, subject, message) {
  transporter.sendMail(
    {
      from: process.env.ADMIN_EMAIL,
      to,
      subject,
      html: message,
      text: message,
    },
    function (error, success) {
      success ? console.log("SUCCESS:", success) : console.log("ERROR:", error);
    }
  );
}
