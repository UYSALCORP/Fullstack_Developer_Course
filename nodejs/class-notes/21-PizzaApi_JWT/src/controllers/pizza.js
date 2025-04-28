"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const Pizza = require("../models/pizza");

module.exports = {
  list: async (req, res) => {

       /* 
            #swagger.tags = ['Pizza']
            #swagger.summary = 'List Pizza'
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

    const result = await res.getModelList(Pizza,"toppingIds");

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Pizza),
      result,
    });
  },

  create: async (req, res) => {
       /* 
                #swagger.ignore=true
         
        */
    
 
    // toppingIds=[1,1,3,3,4,4,4,5]  bu şekilde tekrarlanana toppingIdler olabilir.

    req.body.toppingIds=[...new Set(req.body.toppingIds)]

    const result = await Pizza.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
  /* 
                #swagger.ignore=true
         
        */

    const result = await Pizza.findOne({ _id: req.params.id }).populate("toppingIds");
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    /* 
                #swagger.ignore=true
         
        */

    const result = await Pizza.updateOne({ _id: req.params.id }, req.body, {
      runValidator: true,
      new: true,
    });

    // result içinde modifiedCount bilgisi gelir.
    if (!result.modifiedCount){
        res.errorStatusCode=404
        throw new Error("Data not updated")
    }


    res.status(202).send({
      error: false,
      result,
    });
  },

  delete: async (req, res) => {
       /* 
                #swagger.ignore=true
         
        */
    const result=await Pizza.deleteOne({_id:req.params.id})
    res.status(result.deletedCount ? 204 : 404).send({
      error: !deletedCount,    
    });
  },
};
