"use strict";
//* EXPRESSJS- BLOG Project with Mongoose
// Mongoose ODM

const mongoose = require("mongoose")
const dbConnection = () => {
    mongoose.connect() // Buraya localhost gelecek
    .then(()=>console.log("* DB Connected *"))
    .catch((err)=>console.log("! DB Not Connected !", err))
}

module.exports = dbConnection;