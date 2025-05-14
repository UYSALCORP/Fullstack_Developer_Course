"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const tokenSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
        index: true
    },

    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true
    }

}, {
    collection: 'tokens',
    timestamps: true
});

module.exports = mongoose.model("Token", tokenSchema);