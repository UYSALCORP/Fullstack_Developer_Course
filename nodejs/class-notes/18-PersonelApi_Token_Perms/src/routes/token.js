"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
const {list, create, read, update, deletee} = require("../controllers/token")
const { isAdmin } = require('../middlewares/permissions')
/* ------------------------------------------------------- */
// router.use(isAdmin) //! Bunu yazınca tek tek isAdmin yazmamıza gerek kalmıyor!!!

router.route("/").get(isAdmin, list).post(isAdmin, create)

router.route("/:id")
.get(isAdmin, read)
.put(isAdmin, update)
.patch(isAdmin, update)
.delete(isAdmin, deletee)


/* ------------------------------------------------------ */
module.exports = router