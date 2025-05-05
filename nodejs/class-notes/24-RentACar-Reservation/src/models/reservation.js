"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
/* ------------------------------------------------------- *
{
    "userId": "65343222b67e9681f937f001",
    "carId": "65352f518a9ea121b1ca5001",
    "startDate": "2023-10-10",
    "endDate": "2023-10-16"
}
{
    "userId": "65343222b67e9681f937f002",
    "carId": "65352f518a9ea121b1ca5002",
    "startDate": "2023-10-14",
    "endDate": "2023-10-20"
}
/* ------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const dateToLocaleString=require("../helpers/dateToLocaleString")

// Reservation Model:
const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "reservations",
    timestamps: true,
  }
);

ReservationSchema.set("toJSON",{
  transform:(doc,ret)=>{
    // ret.id=ret._id;
    // ret.startDate=dateToLocaleString(ret.startDate);
    delete ret._v;
  }
})

// Export:

module.exports = mongoose.model("Reservation", ReservationSchema);
