"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require('express').Router()
const { login, logout, refresh } = require('../controllers/auth');
/* ------------------------------------------------------- */
// URL: /auth

router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh);

/* ------------------------------------------------------- */
module.exports = router