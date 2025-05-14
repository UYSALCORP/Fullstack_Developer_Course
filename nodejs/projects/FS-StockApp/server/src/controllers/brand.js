"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Brand = require('../models/brand');
const CustomError = require('../helpers/customError');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "List Brands"
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

        const data = await res.getModelList(Brand);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Brand),
            data
        });
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Create Brand"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Brand"
                }
            }
        */

        const data = await Brand.create(req.body);

        res.status(201).send({
            error: false,
            data
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Get Single Brand"
        */

        const data = await Brand.findById(req.params.id);

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Update Brand"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Brand"
                }
            }
        */

        const data = await Brand.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError("Update failed, data is not found or already updated", 404);

        res.status(202).send({
            error: false,
            data
        });
    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["Brands"]
            #swagger.summary = "Delete Brand"
        */

        const data = await Brand.findByIdAndDelete(req.params.id)

        if (!data) throw new CustomError("Delete failed, data is not found or already deleted", 404);

        res.status(200).send({
            error: false,
            data
        });
    },
}