"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Token = require('../models/token');
const CustomError = require('../helpers/customError');

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.ignore = true
        */

        const data = await res.getModelList(Token);

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Token),
            data
        });
    },

    create: async (req, res) => {
        /*
            #swagger.ignore = true
        */

        const data = await Token.create(req.body);

        res.status(201).send({
            error: false,
            data
        });
    },

    read: async (req, res) => {
        /*
            #swagger.ignore = true
        */

        const data = await Token.findById(req.params.id);

        res.status(200).send({
            error: false,
            data
        });
    },

    update: async (req, res) => {
        /*
            #swagger.ignore = true
        */

        const data = await Token.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });

        if (!data) throw new CustomError("Update failed, data is not found or already updated", 404);

        res.status(202).send({
            error: false,
            data
        });
    },

    deletee: async (req, res) => {
        /*
            #swagger.ignore = true
        */

        const data = await Token.findByIdAndDelete(req.params.id)

        if (!data) throw new CustomError("Delete failed, data is not found or already deleted", 404);

        res.status(200).send({
            error: false,
            data
        });
    },
}