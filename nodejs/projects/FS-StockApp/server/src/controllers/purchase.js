"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Purchase = require('../models/purchase');
const Product = require('../models/product');
const CustomError = require('../helpers/customError');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
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

        const data = await res.getModelList(Purchase, {}, [
            { path: 'userId', select: 'username' },
            { path: 'brandId', select: 'name' },
            { path: 'firmId', select: 'name' },
            { path: 'productId', select: 'name' },
        ]);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Purchase),
            data
        });
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Purchase"
                }
            }
        */

        req.body.userId = req.user._id

        const data = await Purchase.create(req.body);

        if (data) await Product.updateOne({ _id: data.productId }, { $inc: { quantity: +data.quantity } });

        res.status(201).send({
            error: false,
            data
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */

        const data = await Purchase.findById(req.params.id).populate([
            { path: 'userId', select: 'username' },
            { path: 'brandId', select: 'name' },
            { path: 'firmId', select: 'name' },
            { path: 'productId', select: 'name' },
        ]);

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Purchase"
                }
            }
        */

        let currentPurchase;
        if (req.body?.quantity) {
            // Get current quantity
            currentPurchase = await Purchase.findById(req.params.id); // 10
        };

        const data = await Purchase.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError("Update failed, data is not found or already updated", 404);

        if (req.body.quantity) {
            // Calculate the difference
            const difference = req.body.quantity - currentPurchase.quantity // 1 - 10 = -9

            // Update Product with difference
            await Product.updateOne({ _id: currentPurchase.productId }, { $inc: { quantity: +difference } });
        };

        res.status(202).send({
            error: false,
            data
        });
    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */

        const data = await Purchase.findByIdAndDelete(req.params.id)

        if (!data) throw new CustomError("Delete failed, data is not found or already deleted", 404);

        res.status(200).send({
            error: false,
            data
        });
    },
}