"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

// ------------------------------------------
// BlogCategory
// ------------------------------------------

const blogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  },
);

module.exports = mongoose.model("BlogCategory", blogCategorySchema);
