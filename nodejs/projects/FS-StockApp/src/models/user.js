"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection');
const CustomError = require('../helpers/customError');
const passwordEncrypt = require('../helpers/passwordEncrypt')
/* ------------------------------------------------------- */

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
        // set: ()=> 'encyrpte password'
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        index: true
    },

    firstName: {
        type: String,
        trim: true,
        required: true,
    },

    lastName: {
        type: String,
        trim: true,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true
    },

    isStaff: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

}, {
    collection: 'users',
    timestamps: true
});

/* ------------------------------------------------------- */
// https://mongoosejs.com/docs/middleware.html

userSchema.pre(['save', 'findOneAndUpdate'], function (next) {

    // console.log('pre-save worked');
    // console.log(this);

    // _update -> findOneAndUpdate - this -> save
    const data = this?._update ?? this; 

    const isEmailValidated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email);
    const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password);

    if (isEmailValidated) {

        if (isPasswordValidated) {

            if (this._update) { // Update
                this._update.password = passwordEncrypt(data.password);

            } else { // Create
                this.password = passwordEncrypt(data.password);
            };

            next();

        } else {
            next(new CustomError('Password is not validated', 400));
        };

    } else {
        next(new CustomError('Email is not validated', 400));
    };
});

module.exports = mongoose.model("User", userSchema);