"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { list, create, read, update, deletee } = require('../controllers/sale');
const { isAdmin, isLogin, isStaff } = require('../middlewares/permissions');

router.route('/').get(isLogin, list).post(isStaff, create);

router.route('/:id').get(isLogin, read).put(isStaff, update).patch(isStaff, update).delete(isAdmin, deletee);

module.exports = router;
