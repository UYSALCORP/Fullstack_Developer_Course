"use strict";

const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema(
  {
    // _id
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  {
    collection: "blogCategories",
  }
);
const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);

const blogPostSchema = new mongoose.Schema(
  {
    categoryId: {
      // default relation: ManyToOne N-1
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
      unique: true, // converts relation to OneToOne
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
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = { BlogCategory, BlogPost };



// // ------------------------
// //* Sample
// // 1-) Create Schema
// // new mongoose.Schema({fields}, {options});
// const nameSchema = new mongoose.Schema(
//   {
//     // _id: // Auto Created and Increment
//     fieldName: Number,
//     fieldName2: Boolean,
//     fieldName3: {
//       type: String, // JS Data Type
//       default: null,
//       trim: true, // Cuts the spaces before and after
//       unique: true,
//       select: false,
//       index: true,
//       // required: true,
//       required: [true, "custom error message"],
//       enum: ["1", "2", "3", 4, 5, 6], // fieldName bunlardan biri olmalı
//       min: 5,
//       max: 10,
//       // valitedate: () => true // True dönerse db'ye kaydeder. False validate error gönderir.
//       valitedate: [() => true, "custom error message"],
//       get: () => {
//         return data;
//       }, //it works default when we do read operation
//       set: () => {
//         return data;
//       }, //it works default when we do create operation
//     },
//   },
//   {
//     collection: "collectionName", // Table Name
//     timestamps: true, // createdAt and updatedAt
//   }
// );
// // 2-) Convert Schema to Model
// module.exports = mongoose.model("ModelName", nameSchema);
