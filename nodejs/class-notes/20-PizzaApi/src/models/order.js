"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const OrderSchema=new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },
    pizzaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pizza",
        required: true,
        unique: true,
      },
      size:{
        type:String,
        trim:true,
        required:true,
        // belli bir ölçülerle sınırlandırma için enum kodunu kullanıyoruz.
        enum:["Small","Medium","Large","XLarge"]
    
      },
      quantity:{
        type:Number,
        default:1
      },
      price:{
        type:Number,
        required:true
      },
      totalPrice:{
        // ERD amount olarak verilmiş ancak totalPrice kastedilmiş
      type:Number,
      default:function(){
        return this.quantity*this.price
      }

    }


},{collection:"order",timestamps:true})

module.exports=mongoose.model("Order",OrderSchema)