"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require("../models/blog.model");

// BlogCategory Controller
module.exports.blogCategory = {
  list: async (req, res) => {
    const result = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  // Todo below controllers and their routers

  read: async (req, res) => {
    // const result = await BlogCategory.findOne({...filter})
    // const result = await BlogCategory.findOne({_id: req.params.id})
    const result = await BlogCategory.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await BlogCategory.updateOne({...filter},{...data},{...?options})
    //* updateOne, data bulamazsa da yeni data yaratır. Result döndürmez.
    //* findOneAndUpdate, data bulamazsa hiçbir şey yapmaz. Result döndürür.

    const result = await BlogCategory.updateOne(
      { _id: req.params.id },
      req.body
    );
    // const result = await BlogCategory.findOneAndUpdate({_id: req.params.id},req.body, {new:true});

    res.status(200).send({
      error: false,
      result,
      new: await BlogCategory.findById(req.params.id), //* MongoDB update edilen veriyi döndürmez. Döndürmek için bu kodu yazıyoruz.
    });
  },

  delete: async (req, res) => {
    const result = await BlogCategory.deleteOne({ _id: req.params.id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted");
    }
  },
};

// BlogPost Controller
module.exports.blogPost = {
  list: async (req, res) => {
    const result = await BlogPost.find({},{title:1,content:1,categoryId:true}).populate("categoryId")
    //populate. detaylı okumak istediğiniz datayı gönder

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  // Todo below controllers and their routers

  read: async (req, res) => {
    // const result = await BlogPost.findOne({...filter})
    // const result = await BlogPost.findOne({_id: req.params.id})
    const result = await BlogPost.findById(req.params.id, {title:1,content:1,categoryId:true, userId:true});

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await BlogPost.updateOne({...filter},{...data},{...?options})
    //* updateOne, data bulamazsa da yeni data yaratır. Result döndürmez.
    //* findOneAndUpdate, data bulamazsa hiçbir şey yapmaz. Result döndürür.

    const result = await BlogPost.updateOne(
      { _id: req.params.id },
      req.body
    );
    // const result = await BlogPost.findOneAndUpdate({_id: req.params.id},req.body, {new:true});

    res.status(200).send({
      error: false,
      result,
      new: await BlogPost.findById(req.params.id), //* MongoDB update edilen veriyi döndürmez. Döndürmek için bu kodu yazıyoruz.
    });
  },

  delete: async (req, res) => {
    const result = await BlogPost.deleteOne({ _id: req.params.id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted");
    }
  },
};
