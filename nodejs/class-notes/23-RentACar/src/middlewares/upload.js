"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Middleware: upload
// npm i multer

// Multer: UploadFile:
// https://expressjs.com/en/resources/middleware/multer.html
const multer = require('multer')

module.exports = multer({
    storage: multer.diskStorage({
        destination: './upload/',
        filename: function(req, file, returnCallback) {
            returnCallback(null, file.originalname)
        }
    })
})