"use strict";

const BlogCategory = require("../../controllers/view/blogCategoryController");

/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();

// ------------------------------------------
// BlogCategory
// ------------------------------------------

// Get the list of categories
router.get("/", BlogCategory.list);

// Create a new category
router.route("/create").post(BlogCategory.create).get(BlogCategory.create);

// Get a specific category by ID
router.get("/:categoryId", BlogCategory.read);

// Update a specific category by ID
router.put("/:categoryId/update", BlogCategory.update);
router.patch("/:categoryId/update", BlogCategory.update);

// Delete a specific category by ID
router.delete("/:categoryId/delete", BlogCategory.delete);

// Get the list of posts under a specific category
router.get("/:categoryId/posts", BlogCategory.listCategoryPosts);

module.exports = router;
