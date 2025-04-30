"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Token = require("../models/token");

module.exports = {
  list: async (req, res) => {

        /* 
                #swagger.ignore=true
         
        */

    const result = await res.getModelList(Token);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Token),
      result,
    });
  },

  create: async (req, res) => {
       /* 
                #swagger.ignore=true
         
        */
 
    const result = await Token.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
  /* 
                #swagger.ignore=true
         
        */

    const result = await Token.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    /* 
                #swagger.ignore=true
         
        */

    const result = await Token.updateOne({ _id: req.params.id }, req.body, {
      runValidator: true,
      new: true,
    });
    res.status(202).send({
      error: false,
      result,
    });
  },

  delete: async (req, res) => {
       /* 
                #swagger.ignore=true
         
        */
    const result=await Token.deleteOne({_id:req.params.id})
    res.status(result.deletedCount ? 204 : 404).send({
      error: !deletedCount,    
    });
  },
};
