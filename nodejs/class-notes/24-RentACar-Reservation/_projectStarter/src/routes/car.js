"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const permissions=require("../middlewares/permissions")
const car=require("../controllers/car")

// routes/car:
router.route('/')
.get(permissions.isStaffOrisAdmin,car.list)
.post(car.create)


router.route("/:id")
.get(permissions.isLogin,car.read)
.put(permissions.isLogin,car.update)
.patch(permissions.isLogin,car.update)
.delete(permissions.isAdmin,car.delete)


module.exports = router;
