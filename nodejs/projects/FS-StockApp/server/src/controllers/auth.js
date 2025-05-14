"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const User = require("../models/user");
const Token = require('../models/token');
const passwordEncrypt = require('../helpers/passwordEncrypt');
const jwt = require('jsonwebtoken');
const CustomError = require("../helpers/customError");

module.exports = {

    login: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get Token and JWT.'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                }
            }
        */

        if (!((req.body.email || req.body.username) && req.body.password)) throw new CustomError('Please enter username/email and password.');

        const user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });

        if (!user && user.password !== passwordEncrypt(req.body.password)) throw new CustomError('Wrong email/username or password');

        if (!user.isActive) throw new CustomError('This account is not active.');

        /* Simple Token */
        let tokenData = await Token.findOne({ userId: user._id });
        if (!tokenData) {
            tokenData = await Token.create({
                userId: user._id,
                token: passwordEncrypt(user._id + Date.now())
            });
        };

        /* JWT Token */
        const { _id, email, password, ...accessPayload } = user._doc;

        const accessToken = jwt.sign(accessPayload, process.env.ACCESS_KEY, { expiresIn: '30m' });
        const refreshToken = jwt.sign({ _id }, process.env.REFRESH_KEY, { expiresIn: '1d' });

        res.status(200).send({
            error: false,
            token: tokenData.token,
            user,
            bearer: { accessToken, refreshToken }
        });

    },

    refresh: async (req, res) => {
        /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'JWT: Refresh'
            #swagger.description = 'Refresh access-token by refresh-token.'
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    bearer: {
                        refresh: '___refreshToken___'
                    }
                }
            }
        */

        const { refreshToken } = req.body;

        if (!refreshToken) throw new CustomError('Refresh token is required.');

        jwt.verify(refreshToken, process.env.REFRESH_KEY, async function (err, userData) {

            if (!userData) throw new CustomError(err.message, 401);

            const user = await User.findOne({ _id: userData._id });

            if (!user) throw new CustomError('Id is not verified.');

            if (!user.isActive) throw new CustomError('This account is not active.');

            const { _id, email, password, ...accessPayload } = user._doc;
            const accessToken = jwt.sign(accessPayload, process.env.ACCESS_KEY, { expiresIn: '30m' });

            res.status(200).send({
                error: false,
                bearer: { accessToken }
            });

        });
    },

    logout: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Token: Logout"
            #swagger.description = 'Delete token-key.'
        */

        const auth = req.headers?.authorization || null; // Token ...TokenKey...
        const tokenKey = auth ? auth.split(' ') : null; // ['Token', '...tokenKey...']
 
        let message = null, data = {};

        if (tokenKey) { // Sjmple token
            if (tokenKey[0] == 'Token') {
                data = await Token.deleteOne({ token: tokenKey[1] });
                message = 'Token deleted. Logout is OK.'
            }
        } else { // Jwt token
            message = 'Logout is OK.'
        };

        res.status(200).send({
            error: false,
            message
        });

    },
}