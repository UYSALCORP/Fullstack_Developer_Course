"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const BlogCategory = require("../../models/blogCategoryModel");
const blogPostModel = require("../../models/blogPostModel");

// ------------------------------------------
// BlogCategory
// ------------------------------------------
module.exports = {
  list: async (req, res) => {
    // const data = await BlogCategory.find()
    const data = await res.getModelList(BlogCategory);

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
      details: await res.getModelListDetails(BlogCategory),
    });
  },

  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  listCategoryPosts: async (req, res) => {
    const data = await blogPostModel
      .find({
        blogCategoryId: req.params.categoryId,
      })
      .populate("blogCategoryId");

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  read: async (req, res) => {
    // req.params.categoryId
    // const data = await BlogCategory.findById(req.params.categoryId)
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    // const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body, { new: true }) // return new-data
    const data = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body,
      { runValidators: true },
    );

    res.status(202).send({
      error: false,
      body: req.body,
      result: data, // update infos
      newData: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
