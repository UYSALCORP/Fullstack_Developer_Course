"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const passwordEncrypt = require("../helpers/passwordEncrypt");
const Personnel = require("../models/personnel");
const Token = require("../models/token");

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;
    if ((username || email) && password) {
      const user = await Personnel.findOne({
        $or: [{ username }, { email }],
        password,
      });
      // personnel controller'da passwordencrypte yapmıştık, user'da password gönderince kendisi çalışacak, alltaki kodu kullanmaya gerek kalmayacak
      // if(user.password == passwordEncrypt(password))

      if (user) {
        if (user.isActive) {
          // TOKEN

          let tokenData = await Token.findOne({ userId: user._id });

          if (!tokenData) {
            tokenData = await Token.create({
              userId: user._id,
              token: passwordEncrypt(user._id + Date.now()),
            });
          }

          // TOKEN

          res.status(200).send({
            error: false,
            token: tokenData.token,
            user,
            message: "Login Successfull!",
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("User is not active");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong email/username or password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Username/Email and Password Required");
    }
  },

  logout: async (req, res) => {
    const token = req.user
      ? await Token.deleteOne({ userId: req.user._id })
      : null;

    res.status(200).send({
      error: false,
      message: token?.deletedCount
        ? "User token deleted! Logout Success"
        : "Logout Success",
    });
  },
};
