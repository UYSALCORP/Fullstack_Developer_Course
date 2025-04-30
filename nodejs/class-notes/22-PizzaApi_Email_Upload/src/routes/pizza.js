"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
const pizza = require("../controllers/pizza");
/* ------------------------------------------------------- */
const upload = require("../middlewares/upload")

// //* UPLOAD (Multer Middleware)
// // npm i multer
// const multer = require("multer");

// const upload = multer({
// //   dest: "./uploads", // Destination of images
//   storage: multer.diskStorage({
//       destination: "./uploads",
//       filename: function(req, file, cb) {
//         // console.log("file",file)
//         // console.log("req", req)
//         // cb(error, fileName)
//         cb(null, Date.now()+ "_"+ file.originalname)
//       }
//   })
// });

/* ------------------------------------------------------- */
router.route("/")
    .get(pizza.list)
    .post(upload.single("image"), pizza.create); // Only one image & field name must be image
    // .post(upload.array("image"), pizza.create);
    // .post(upload.any(), pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(upload.single("image"),pizza.update)
  .patch(upload.single("image"),pizza.update)
  .delete(pizza.delete);
/* ------------------------------------------------------- */
module.exports = router;
