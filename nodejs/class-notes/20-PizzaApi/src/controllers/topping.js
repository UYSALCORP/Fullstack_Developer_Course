"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Topping = require("../models/topping");

module.exports = {
  list: async (req, res) => {

       /*
            #swagger.tags = ["Toppings"]
            #swagger.summary = "List Toppings"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    const result = await res.getModelList(Topping);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Topping),
      result,
    });
  },

  create: async (req, res) => {
      /*
            #swagger.tags = ["Toppings"]
            #swagger.summary = "Create Topping"
        */
 
    const result = await Topping.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Toppings"]
            #swagger.summary = "Get Single Topping"
        */

    const result = await Topping.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
   /*
            #swagger.tags = ["Toppings"]
            #swagger.summary = "Update Topping"
        */

    const result = await Topping.updateOne({ _id: req.params.id }, req.body, {
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
               #swagger.tags = ["Toppings"]
               #swagger.summary = "Delete Topping"
           */
    const result=await Topping.deleteOne({_id:req.params.id})
    res.status(result.deletedCount ? 204 : 404).send({
      error: !deletedCount,    
    });
  },
};
