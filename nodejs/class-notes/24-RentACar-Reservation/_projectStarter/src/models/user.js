"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false
}
/* ------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const uniqueValidator = require("mongoose-unique-validator");
const emailValidation=require("../helpers/emailValidation")
// User Model:
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
      //Validation controllerda
      // User.find({filter},{select})
      // select:false
    },

    email: {
      type: String,
      trim: true,
      required: [true, "An Email address is required"],
      // Bu kısımdaki mesaj geçersiz- Bu mesaj görünmez
      // MongoDb -  Dublicate Error hatası görünür
      //Unique validater kullanılır
      unique: true,
      validate: [
        (email) => emailValidation(email),
        "Email format is not valid",
      ],
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isStaff: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true },
);

UserSchema.plugin(uniqueValidator, {
  message: "This {PATH} is exist,Bu bir deneme",
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
