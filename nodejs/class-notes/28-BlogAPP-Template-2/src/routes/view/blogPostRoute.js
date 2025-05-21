"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();

const BlogPost = require("../../controllers/view/blogPostController");

// ------------------------------------------
// BlogPost
// ------------------------------------------
// URL: /views/blog


// Get the list of posts
router.get("/", BlogPost.list);

// Create a new post
router.route("/create").get(BlogPost.create).post(BlogPost.create);

// Get a specific post by ID
router.get("/:postId", BlogPost.read);

// Update a specific post by ID
router.route("/:postId/update").get(BlogPost.update).post(BlogPost.update);

// Delete a specific post by ID
router.get("/:postId/delete", BlogPost.delete);

module.exports = router;
