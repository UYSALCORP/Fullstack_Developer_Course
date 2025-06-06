"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Personnel API
------------------------------------------------------- */

const router = require('express').Router()

const { login, logout } = require('../controllers/auth')

// URL : /auth

router.post('/login', login)

router.post('/logout', logout)


module.exports = router