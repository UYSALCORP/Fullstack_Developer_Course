"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require("mongoose");

// ------------------------------------------
// BlogPost
// ------------------------------------------
const blogPostSchema = new mongoose.Schema(
  {
    // _id

    userId: {
      type: mongoose.Schema.ObjectId, // Relational ObjectId
      ref: "User", // ModelName
      required: true,
    },

    blogCategoryId: {
      type: mongoose.Schema.ObjectId, // Relational ObjectId
      ref: "BlogCategory", // ModelName
      required: true,
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },
    imageUrl: String,

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { collection: "blogPosts", timestamps: true },
);

module.exports = mongoose.model("BlogPost", blogPostSchema);
