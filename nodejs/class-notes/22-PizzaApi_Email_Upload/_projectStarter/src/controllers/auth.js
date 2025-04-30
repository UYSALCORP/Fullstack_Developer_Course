"use strict"
/* -------------------------------------------------------
| FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const CustomError = require("../helpers/customError");
const User = require('../models/user');
const Token = require('../models/token');
const passwordEncrypt = require('../helpers/passwordEncrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    login: async (req, res) => {
        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "aA12345.?",
                }
            }
        */

        const { username, email, password } = req.body;

        if (!((username || email) && password)) throw new CustomError('username/email and password are required', 401);

        const user = await User.findOne({ $or: [{ email }, { username }], password });

        if (!user) throw new CustomError('Incorrect email/username or password', 401);

        if (!user.isActive) throw new CustomError('This account is not active.');

        /* Simple Token */
        let tokenData = await Token.findOne({ userId: user._id });

        if (!tokenData) {
            tokenData = await Token.create({
                userId: user._id,
                token: passwordEncrypt(Date.now() + user._id)
            });
        };
        /* Simple Token */

        /* JWT Token */
        // Access Token:
        const accessData = {
            _id: user._id,
            username: user.username,
            isActive: user.isActive,
            isAdmin: user.isAdmin
        };

        // const accessToken = jwt.sign(payload, secretKey, {lifetime})
        const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, { expiresIn: '15m' });

        // Refresh Token:
        const refreshToken = jwt.sign({ _id: user._id }, process.env.REFRESH_KEY, { expiresIn: '1d' });
        /* JWT Token */

        res.status(200).send({
            error: false,
            bearer: {
                access: accessToken,
                refresh: refreshToken
            },
            token: tokenData.token,
            user: user
        })
    },

    logout: async (req, res) => {

        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Logout"
        */
        const auth = req.headers?.authorization; // Token ...TokenKey... || Beaer ...AccessToken...
        const tokenArr = auth ? auth.split(' ') : null;

        if (tokenArr && tokenArr[0] == 'Token') {
            const result = await Token.deleteOne({ token: tokenArr[1] });

            res.status(200).send({
                error: false,
                result,
                message: 'Simple Token: Token Deleted. Logout Success.'
            });

        } else if (tokenArr && tokenArr[0] == "Bearer") {
            res.status(200).send({
                error: false,
                message: 'JWT: No need any process for logout. Logout Success.'
            })
        }
    },

    refresh: async (req, res) => {

        /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Refresh"
            #swagger.description = 'Refresh with refreshToken for get accessToken'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    refresh:"...refreshToken..."
                }
            }
        */

        const { refresh } = req.body;

        if (!refresh) throw new CustomError('Refresh Token not found.', 401);

        const refreshData = jwt.verify(refresh, process.env.REFRESH_KEY);

        if (!refreshData) throw new CustomError('JWT Refresh Token is wrong.');

        const user = await User.findById(refreshData._id);

        if (!user) throw new CustomError('JWT Refresh Token data is broken');

        if (!user.isActive) throw new CustomError('This account is not active.');

        const accessData = {
            _id: user._id,
            username: user.username,
            isActive: user.isActive,
            isAdmin: user.isAdmin
        };

        const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, { expiresIn: '15m' });

        res.status(200).send({
            error: false,
            access: accessToken
        })
    }
}