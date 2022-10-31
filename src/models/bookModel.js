const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const bookSchema=new mongoose.Schema ({
    name:String,
   author:{
    type:ObjectId,
    ref:"newAuthor"
   },
    price:Number,
    rating:Number,
    publisher:{
        type:ObjectId,
        ref:"newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model('newBook', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
