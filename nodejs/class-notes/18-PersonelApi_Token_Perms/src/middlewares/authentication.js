"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

module.exports = async (req, res, next) => {
    req.user = null;
    // Get Token from Headers:
    const auth = req.headers?.authorization || null; // Token ...tokenKey...
    const tokenKey = auth ? auth.split(" ") : null // ['Token', 'tokenKey']
    
    if(tokenKey && tokenKey[0] == "Token"){
        const tokenData = await Token.findOne({token: tokenKey[1]}).populate("userId")
        if(tokenData) req.user = tokenData.userId
    }

    next()
};