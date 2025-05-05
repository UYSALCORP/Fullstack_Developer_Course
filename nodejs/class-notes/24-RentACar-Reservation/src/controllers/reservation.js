"use strict";
const CustomError = require("../errors/customError");
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Reservation Controller:

// Model:
const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Reservations"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    let customFilter = {};

    if (!req.user.isAdmin || !req.user.isStaff)
      customFilter = { userId: req.user._id };

    const data = await res.getModelList(Reservation, customFilter, [
      { path: "userId", select: "username firstName lastName" },
      { path: "carId", select: "brand model" },
      { path: "createdId", select: "username" },
      { path: "updatedId", select: "username" },
    ]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation),
      data,
    });
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema:{
                $ref:"#/definitions/Reservation"
                }
              
            }
        */

    if (!req.user.isAdmin || !req.user.isStaff) {
      req.body.userId = req.user._id;
    } else if (!req.body.userId) {
      req.body.userId = req.user._id;
    }

    // dateValidation kontrolünden geçirelim
    // StartDate ve EndDate yakalayıp uygun araç bulacağız
    const { startDate, endDate, reservedDays } = dateValidation(req.body?.startDate, req.body?.endDate);

    // Tarih aralıkları çakışanları bulduk!
    const reservedCarIds = await Reservation.find({
      carId: req.body.carId,
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    });

    if (reservedCarIds) {
      throw new CustomError("The car is already reserved for the given dates.", 400);
    }

    const userReservedCarInDates = await Reservation.find({
      userId: req.body.userId,
      startDate: { $lte: endDate },
      endDate: { $gte: startDate },
    });

    if(userReservedCarInDates){
        throw new CustomError("The user is already reserved the car for given dates", 400)
    };

    const dailyCost= await Car.findOne({_id:req.body?.carId},{_id:0,pricePerDay:1}).then((car)=>Number(car.pricePerDay));

    // Amount için -> pricePerDay * reservedDays
    req.body.amount= dailyCost * reservedDays

    const data = await Reservation.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Get Single Reservation"
        */

    if (!req.user.isAdmin || !req.user.isStaff)
      customFilter = { userId: req.user._id };

    const data = await Reservation.findOne(
      { _id: req.params.id },
      ...customFilter
    );

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                   $ref:"#/definitions/Reservation"
                }
            }
        */

    const data = await Reservation.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Reservation.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */

    const data = await Reservation.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
