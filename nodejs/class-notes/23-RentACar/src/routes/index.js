"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// user:
router.use("/user", require("./user"));
// token:
router.use("/token", require("./token"));

// car:
router.use("/car", require("./car"));
// reservation:
router.use("/reservation", require("./reservation"));

// document:
router.use("/documents", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
