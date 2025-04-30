"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
//* UPLOAD (Multer Middleware)
// npm i multer
const multer = require("multer");

module.exports = multer({
    //   dest: "./uploads", // Destination of images
      storage: multer.diskStorage({
          destination: "./uploads",
          filename: function(req, file, cb) {
            // console.log("file",file)
            // console.log("req", req)
            // cb(error, fileName)
            cb(null, Date.now()+ "_"+ file.originalname)
          }
      })
    });