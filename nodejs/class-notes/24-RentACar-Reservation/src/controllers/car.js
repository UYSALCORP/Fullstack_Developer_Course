"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Car Controller:

// Model:
const Car = require('../models/car');
const dateValidation=require("../helpers/dateValidation");
const Reservation = require('../models/reservation');

module.exports = {

    list: async (req, res) => {
           /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "List Cars"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
        let customFilter={isAvailable:true}

        if (req.user.isAdmin || req.user.isStaff) customFilter={}

        // StartDate ve EndDate yakalayıp uygun araç bulacağız
        const {startDate, endDate} = req.query

        // dateValidation kontrolünden geçirelim
        dateValidation(startDate, endDate)
        // find metodu select ve query parametreleri alır.
        // Tarih aralıkları çakışanları bulduk!
        const reservedCarIds= await Reservation.find({
            startDate:{$lte:endDate},
            endDate:{$gte:startDate}
        },{carId:1,_id:0}).distinct("carId")
        // distinct : get only carId in array

        // Müsait olanlar = topalm - reservedCarIds
        customFilter._id = {$nin:reservedCarIds}

        const data = await res.getModelList(Car,customFilter,["createdId"],["updatedId"])

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Car),
            data
        })
    },

    create: async (req, res) => {
         /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Create Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema:{
                $ref:"#/definitions/Car"
                }
              
            }
        */

        const data = await Car.create(req.body)

        res.status(201).send({
            error: false,
            data
        })

    },

    read: async (req, res) => {
           /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Get Single Car"
        */


        const data = await Car.findOne({ _id: req.params.id }).populate(
            {path:"createdId", select:"username"},
            {path:"updatedId", select:"username"}
        )

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Update Car"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref:"#/definitions/Car"
                }
            }
        */


        const data = await Car.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Car.findOne({ _id: req.params.id })
        })

    },

    delete: async (req, res) => {
            /*
            #swagger.tags = ["Cars"]
            #swagger.summary = "Delete Car"
        */

        const data = await Car.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    },
}