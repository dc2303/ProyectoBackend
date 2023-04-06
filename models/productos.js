const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const products = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    stock:{
        type: Boolean,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
})

const Product = mongoose.model('Product', products);
module.exports = {Product}