"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
const department = require("../controllers/department");
/* ------------------------------------------------------- */

router.route("/").get(department.list).post(department.create)

router.route("/:id")
    .get(department.read)
    .put(department.update)
    .patch(department.update)
    .delete(department.delete)

/* ------------------------------------------------------- */
module.exports = router