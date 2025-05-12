"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Product = require('../models/product');
const CustomError = require('../helpers/customError');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "List Products"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const result = await res.getModelList(Product);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Product),
            result
        });
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Create Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Product"
                }
            }
        */

        const result = await Product.create(req.body);

        res.status(201).send({
            error: false,
            result
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get Single Product"
        */

        const result = await Product.findById(req.params.id);

        res.status(200).send({
            error: false,
            result
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Update Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Product"
                }
            }
        */

        const result = await Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!result) throw new CustomError("Update failed, data is not found or already updated", 404);

        res.status(202).send({
            error: false,
            result
        });
    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Delete Product"
        */

        const result = await Product.findByIdAndDelete(req.params.id)

        if (!result) throw new CustomError("Delete failed, data is not found or already deleted", 404);

        res.status(200).send({
            error: false,
            result
        });
    },
}