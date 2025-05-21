"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const BlogPost = require("../../models/blogPostModel");
const BlogCategory = require('../../models/blogCategoryModel');
const removeQueryParam = require("../../helpers/removeQueryParam");

// ------------------------------------------
// BlogPost
// ------------------------------------------

module.exports = {
  list: async (req, res) => {
    const [posts, recentPosts, categories, details] = await Promise.all([
      res.getModelList(BlogPost, { isPublished: true }, "blogCategoryId"),
      BlogPost.find({ isPublished: true }).sort({ createdAt: -1 }).limit(3),
      BlogCategory.find(),
      res.getModelListDetails(BlogPost, { isPublished: true }),
    ]);

    let pageUrl = '';
    const queryString = req.originalUrl.split('?')[1];
    if (queryString) pageUrl = removeQueryParam(queryString, 'page');
    pageUrl = pageUrl ? "&" + pageUrl : '';

    res.render('index', { categories, posts, recentPosts, details, pageUrl });
  },

  create: async (req, res) => {

    if (req.method === 'POST') {
      req.body.userId = req.session.user.id
      const data = await BlogPost.create(req.body);

      res.redirect('/blog/posts')
    } else {
      const categories = await BlogCategory.find()
      res.render('postForm', { post: null, categories })
    }
  },

  read: async (req, res) => {
    // req.params.postId
    // const data = await BlogPost.findById(req.params.postId)
    const post = await BlogPost.findOne({ _id: req.params.postId }).populate("blogCategoryId"); // get Primary Data

    res.render('postRead', { post });
  },

  update: async (req, res) => {
    // const data = await BlogPost.findByIdAndUpdate(req.params.postId, req.body, { new: true }) // return new-data


    if (req.method === 'POST') {
      const data = await BlogPost.updateOne(
        { _id: req.params.postId },
        req.body,
        { runValidators: true },
      );

      res.redirect('/blog/posts');
    } else {
      const post = await BlogPost.findById(req.params.postId).populate('blogCategoryId');
      const categories = await BlogCategory.find()
      res.render('postForm', { post, categories })
    }

  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });

    res.redirect('/blog/posts');
  },
};
