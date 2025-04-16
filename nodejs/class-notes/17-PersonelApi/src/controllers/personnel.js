"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const Personnel = require("../models/personnel")

module.exports = {
    list: async (req, res) => {
        const result = await res.getModelList(Personnel)
        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Personnel),
            result
        })
    },
    create: async (req, res) => {
        const result = await Personnel.create(req.body)
        // 201 : Create
        res.status(201).send({
            error: false,
            result
        })
    },
    read: async (req, res) => {
        const result = await Personnel.findOne({_id:req.params.id})
        res.status(200).send({
            error: false,
            result
        })
    },
    update: async (req, res) => {
        const result = await Personnel.updateOne({_id:req.params.id}, req.body,{runValidators:true,new:true})
        // 202 : Update
        res.status(202).send({
            error: false,
            result
        })
    },
    delete: async (req, res) => {
        const result = await Personnel.deleteOne({_id:req.params.id})
        // 204 : No Content - 404 : Not Found
        res.status(result.deletedCount ? 204 : 404).send({
            error: true,
            message: "Data is not found! OR already deleted.",
            result
        })
    }
}