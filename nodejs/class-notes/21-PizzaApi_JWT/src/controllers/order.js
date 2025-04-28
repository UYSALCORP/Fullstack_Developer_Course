"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Order = require("../models/order");
const Pizza=require("../models/pizza")

module.exports = {
  list: async (req, res) => {

       /* 
            #swagger.tags = ['Order']
            #swagger.summary = 'List Order'
            #swagger.desription = `
                You can sen query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples usage:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    const result = await res.getModelList(Order);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Order),
      result,
    });
  },

  create: async (req, res) => {
       /* 
                #swagger.ignore=true
         
        */
    const pizza=await Pizza.findOne({id:req?.body?.pizzaId})

    if (!pizza){
        res.errorStatusCode=404
        throw new Error("Pizza not found")
    }
 
    req.body.price=pizza.price
    
    const result = await Order.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
  /* 
                #swagger.ignore=true
         
        */

    const result = await Order.findOne({ _id: req.params.id }).populate(["userId","pizzaId"]);
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    /* 
                #swagger.ignore=true
         
        */

    const result = await Order.updateOne({ _id: req.params.id }, req.body, {
      runValidator: true,
      new: true,
    });
    res.status(202).send({
      error: false,
      result,
    });
  },

  delete: async (req, res) => {
    
    const result=await Order.deleteOne({_id:req.params.id})
    res.status(result.deletedCount ? 204 : 404).send({
      error: !deletedCount,    
    });
  },
};
