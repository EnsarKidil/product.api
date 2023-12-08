//this class is the database model for our Product API
//in this api, mongodb is used
//this is why I called the mongoose library first

const mongoose = require('mongoose');

//this is the schema for our product
//I wanted to override the ObjectId type with string
//I don't want the version key to be shown on my database
//createdDate and updatedDate default values are the time that object will be created at
const productSchema = new mongoose.Schema({
    _id : String,
    title : String,
    description : String,
    price : String,
    category : String,
    createdDate : {
        type : Date,
        default : Date.now().toString()
    },
    updatedDate : {
        type : String,
        default: Date.now().toString()
    }
}, {versionKey: false })

const ProductModel = mongoose.model('Product', productSchema);


module.exports = ProductModel;