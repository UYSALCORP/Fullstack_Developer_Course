"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
const permissions=require("../middlewares/permissions")
const reservation = require("../controllers/reservation")
/* ------------------------------------------------------- */
// routes/reservation:

router.route('/')
.get(permissions.isStaffOrisAdmin,reservation.list)
.post(reservation.create)


router.route("/:id")
.get(permissions.isLogin,reservation.read)
.put(permissions.isLogin,reservation.update)
.patch(permissions.isLogin,reservation.update)
.delete(permissions.isAdmin,reservation.delete)

module.exports = router;
