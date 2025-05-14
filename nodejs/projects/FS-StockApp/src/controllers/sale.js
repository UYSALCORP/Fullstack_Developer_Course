"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Sale = require('../models/sale');
const Product = require('../models/product');
const CustomError = require('../helpers/customError');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "List Sales"
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

        const data = await res.getModelList(Sale, {}, [
            { path: 'userId', select: 'username' },
            { path: 'brandId', select: 'name' },
            { path: 'productId', select: 'name' },
        ]);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Sale),
            data
        });
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Create Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Sale"
                }
            }
        */

        req.body.userId = req.user._id;

        // Get current product 
        const currentProduct = await Product.findById(req.body.productId);

        if (currentProduct.quantity < req.body.quantity) throw new CustomError(`There is not enough product-quantity for this sale. current quantity:${currentProduct.quantity}`, 400)

        const data = await Sale.create(req.body);

        if (data) {
            // Update product quantity
            await Product.updateOne({ _id: data.productId }, { $inc: { quantity: -data.quantity } });
        }

        res.status(201).send({
            error: false,
            data
        });
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Get Single Sale"
        */

        const data = await Sale.findById(req.params.id).populate([
            { path: 'userId', select: 'username' },
            { path: 'brandId', select: 'name' },
            { path: 'productId', select: 'name' },
        ]);

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Update Sale"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref: "#/definitions/Sale"
                }
            }
        */

        if (req.body.quantity) {
            // Get current quantity
            const currentSale = await Sale.findById(req.params.id); // 5

            // Calculate the difference
            const difference = req.body.quantity - currentSale.quantity // 50 - 5 = 45

            // Update Product with difference
            const updatedProduct = await Product.updateOne({ _id: currentSale.productId, quantity: { $gte: difference } }, { $inc: { quantity: -difference } });

            if (!updatedProduct.modifiedCount) throw new CustomError(`There is not enough product-quantity for this sale.`, 400)
        }

        const data = await Sale.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError("Update failed, data is not found or already updated", 404);

        res.status(202).send({
            error: false,
            data
        });
    },

    deletee: async (req, res) => {
        /*
            #swagger.tags = ["Sales"]
            #swagger.summary = "Delete Sale"
        */

        const data = await Sale.findByIdAndDelete(req.params.id)

        if (!data) throw new CustomError("Delete failed, data is not found or already deleted", 404);

        res.status(200).send({
            error: false,
            data
        });
    },
}