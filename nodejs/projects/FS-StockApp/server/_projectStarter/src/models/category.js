"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    }

}, {
    collection: 'categories',
    timestamps: true
});

module.exports = mongoose.model("Category", categorySchema);