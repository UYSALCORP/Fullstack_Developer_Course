"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const ToppingSchema = new mongoose.Schema(
  { 
    name: { 
        type: String, 
        trim: true, 
        required: true, 
        unique: true } },
  { collection: "toppings", timestamps: true }
);
module.exports = mongoose.model("Topping", ToppingSchema);
