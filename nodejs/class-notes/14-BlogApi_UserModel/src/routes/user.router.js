"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();
const user = require("../controllers/user.controller");

// URL: /users ->
// User Controller
router.route("/")
    .get(user.list)
    .post(user.create);

router.route("/:id")
    .get(user.read)
    .put(user.update) // MongoDB update edilen veriyi döndürmez.
    .patch(user.update)
    .delete(user.delete);

module.exports = router;