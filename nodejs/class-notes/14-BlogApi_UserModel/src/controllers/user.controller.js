"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require("../models/user.model")

// User Controller
module.exports = {
  list: async (req, res) => {
    const result = await User.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await User.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  // Todo below controllers and their routers

  read: async (req, res) => {
    // const result = await User.findOne({...filter})
    // const result = await User.findOne({_id: req.params.id})
    const result = await User.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await User.updateOne({...filter},{...data},{...?options})
    //* updateOne, data bulamazsa da yeni data yaratır. Result döndürmez.
    //* findOneAndUpdate, data bulamazsa hiçbir şey yapmaz. Result döndürür.

    const result = await User.updateOne(
      { _id: req.params.id },
      req.body
    );
    // const result = await User.findOneAndUpdate({_id: req.params.id},req.body, {new:true});

    res.status(200).send({
      error: false,
      result,
      new: await User.findById(req.params.id), //* MongoDB update edilen veriyi döndürmez. Döndürmek için bu kodu yazıyoruz.
    });
  },

  delete: async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.id });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted");
    }
  },
};
