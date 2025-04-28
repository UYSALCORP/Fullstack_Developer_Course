"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Token = require("../models/token");
const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    req.user = null;
    const auth = req.headers?.authorization; // Token ...TokenKey... || Bearer ...AccessToken...
    const tokenArr = auth ? auth.split(" ") : null;
    
    if(tokenArr && tokenArr[0] == "Token"){
        const tokenData = await Token.findOne({token: tokenArr[1]}).populate("userId") // {userId: {...userInfo}, token} || null
        req.user = tokenData ? tokenData.userId : null
    } else if(tokenArr && tokenArr[0] == "Bearer"){
        // jwt.verify(jwtToken, secretKey, callbackFunction)
        jwt.verify(tokenArr[1], process.env.ACCESS_KEY, (error, accessData)=>{
            req.user = accessData ? accessData : null;
        })
    }

    next()
}