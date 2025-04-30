"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
const user=require("../controllers/user")
const upload = require("../middlewares/upload")
/* ------------------------------------------------------- */
// router.route("/").get(user.list).post(upload.single("profileImg"),user.create)
router.route("/").get(user.list).post(user.create)

router.route("/:id")
.get(user.read)
.put(user.update)
.patch(user.update)
.delete(user.deleteUser)
/* ------------------------------------------------------- */
module.exports = router