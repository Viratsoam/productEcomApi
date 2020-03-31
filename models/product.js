// require mongoose to create schema 
const mongoose = require('mongoose');       

// creating the product schema
const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    }
},
{timestamps:true}
);

//create a model for this schema
const Products = mongoose.model('Products',ProductSchema);
// Exporting Schema
module.exports = Products;