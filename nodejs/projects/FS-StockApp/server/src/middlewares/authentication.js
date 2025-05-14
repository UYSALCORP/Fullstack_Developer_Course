"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// app.use(authentication):

const Token = require('../models/token');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    req.user = null;

    const auth = req.headers?.authorization || null; // Token ...TokenKey... | Bearer ...accesKey...
    const tokenKey = auth ? auth.split(' ') : null; // ['Token', '...tokenKey...'] | ['Bearer', '...accessKey...']

    if (tokenKey) {
        if (tokenKey[0] == 'Token') { // Sjmple token
            const token = await Token.findOne({ token: tokenKey[1] }).populate('userId');
            req.user = token ? token.userId : null;
        } else if (tokenKey[0] == 'Bearer') { // JWT token
            jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (err, userData) => req.user = userData ? userData : null)
        }
    }

    next();
};