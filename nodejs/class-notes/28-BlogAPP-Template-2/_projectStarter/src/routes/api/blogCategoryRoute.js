"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();

const BlogCategory = require("../../controllers/api/blogCategoryController");

// ------------------------------------------
// BlogCategory
// ------------------------------------------
router.route("/").get(BlogCategory.list).post(BlogCategory.create);

router
  .route("/:categoryId")
  .get(BlogCategory.read)
  .put(BlogCategory.update)
  .delete(BlogCategory.delete);

router.get("/:categoryId/posts", BlogCategory.listCategoryPosts);

module.exports = router;
