"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// qeury parse was 'extended' with v5 it is using built in libriray which 'qs(querystring)'
// extended -> ?a[b]=1 = { a: { b:1 }} & qs -> ?a[b]=1 = { 'a[b]':1 }
app.set("query parser", "extended");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// E-Mail
// npm i nodemailer
const nodemailer = require("nodemailer");

//* Send Email With Etheral(fake) Email
// Create Test Account:
// nodemailer.createTestAccount().then(email=>console.log(email))

// {
//     user: 'mkytfzefs3tqdgtr@ethereal.email',
//     pass: 'EryAMfyRpHEjWpn7Hk',
//     smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
//     imap: { host: 'imap.ethereal.email', port: 993, secure: true },
//     pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
//     web: 'https://ethereal.email',
//     mxEnabled: false
// }

// Connect to MailServer / SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "mkytfzefs3tqdgtr@ethereal.email",
//     pass: "EryAMfyRpHEjWpn7Hk",
//   },
// });

// // Send Mail:
// transporter.sendMail({
//     from:"mkytfzefs3tqdgtr@ethereal.email",
//     to: "uysalcorp@gmail.com",
//     subject:"Hi there",
//     html:"<p>Hello there, How are you today?</p>",
//     text:"Hello there, \n How are you today?"
// },function(error, success){
//     success ? console.log("SUCCESS:", success) : console.log("ERROR:", error)
// })

//* Send Email With Gmail Service
// Googlemail (gmail)
// Google -> AccountHome -> Security -> Two-Step-Verify (make it on) -> App-Passwords (if not showing use this link: https://myaccount.google.com/apppasswords)
// elsv maka igcw ldwb

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "uysalcorp@gmail.com",
//       pass: "elsv maka igcw ldwb",
//     },
//   });
  
//   // Send Mail:
//   transporter.sendMail({
//       from:"uysalcorp@gmail.com",
//       to: "binaycelalselim@gmail.com",
//       subject:"Hi there",
//       html:"<p>Hello there, How are you today?</p>",
//       text:"Hocam merhabalar, iyi akşamlar iyi dersler :D"
//   },function(error, success){
//       success ? console.log("SUCCESS:", success) : console.log("ERROR:", error)
//   })

//* Send Email With Yandex Service
// const transporter = nodemailer.createTransport({
//     service: "yandex",
//     auth: {
//       user: "uysalcorp@gmail.com",
//       pass: "--yourPersonalPassword--",
//     },
//   });
  
//   // Send Mail:
//   transporter.sendMail({
//       from:"uysalcorp@gmail.com",
//       to: "alidrl26@gmail.com",
//       subject:"Hi there",
//       html:"<p>Hello there, How are you today?</p>",
//       text:"Hocam merhabalar, iyi akşamlar iyi dersler :D"
//   },function(error, success){
//       success ? console.log("SUCCESS:", success) : console.log("ERROR:", error)
//   })

/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
