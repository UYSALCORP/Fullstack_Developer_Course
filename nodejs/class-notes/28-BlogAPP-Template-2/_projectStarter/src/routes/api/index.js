"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// blogCategory:
router.use("/categories", require("./blogCategoryRoute"));
// blogPost:
router.use("/posts", require("./blogPostRoute"));
// user:
router.use("/users", require("./userRoute"));

module.exports = router;
