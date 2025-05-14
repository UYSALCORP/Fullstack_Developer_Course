"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const saleSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    amount: {
        type: Number,
        set: function () { return this.quantity * this.price }, // only works if this field is sent
        default: function () { return this.quantity * this.price }, // works on create
        transform: function () { return this.quantity * this.price } // works on update
    }
}, {
    collection: 'sales',
    timestamps: true
});

module.exports = mongoose.model("Sale", saleSchema);