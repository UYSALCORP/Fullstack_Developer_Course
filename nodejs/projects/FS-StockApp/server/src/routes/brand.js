"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const { list, create, read, update, deletee } = require('../controllers/brand');
const { isAdmin, isLogin } = require('../middlewares/permissions');

router.route('/').get(isLogin, list).post(isAdmin, create);

router.route('/:id').get(isLogin, read).put(isAdmin, update).patch(isAdmin, update).delete(isAdmin, deletee);

module.exports = router;
