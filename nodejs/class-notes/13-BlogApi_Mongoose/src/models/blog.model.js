"use strict";

const { default: mongoose } = require("mongoose");

// ------------------------
//* Sample
// 1-) Create Schema
// new mongoose.Schema({fields}, {options});

const nameSchema = new mongoose.Schema({
    // _id: // Auto Created and Increment
    fieldName: Number,
    fieldName2: Boolean,
    fieldName3: {
        type: String, // JS Data Type
        default: null,
        trim: true, // Cuts the spaces before and after 
        unique: true,
        select: false,
        index: true,
        // required: true,
        required: [true, "custom error message"],

    }
},{
    collection: "collectionName", // Table Name
    timestamps: true // createdAt and updatedAt
});