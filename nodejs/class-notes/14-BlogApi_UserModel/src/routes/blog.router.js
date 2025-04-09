"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router();
const blogCategory = require('../controllers/blog.controller');
// const { BlogCategory } = require('../models/blog.model');
/* ------------------------------------------------------- */
// URL: /blogs ->

router.route("/blogs")
    .get(blogCategory.list)
    .post(blogCategory.create);

router.route("/blogs/:id").get(BlogCategory.read)

module.exports = router;