"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();

const BlogPost = require("../../controllers/api/blogPostController");

// ------------------------------------------
// BlogPost
// ------------------------------------------
router.route("/").get(BlogPost.list).post(BlogPost.create);

router
  .route("/:postId")
  .get(BlogPost.read)
  .put(BlogPost.update)
  .delete(BlogPost.delete);

module.exports = router;
