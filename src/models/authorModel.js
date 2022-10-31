const mongoose = require('mongoose');

const authorSchema=new mongoose.Schema ({
    authorName:String,
    age:Number,
    address:String,
    rating:Number
},{timestamps:true})





module.exports= mongoose.model('newAuthor',authorSchema)


// module.exports = {
//     author: mongoose.model('author', authorSchema),
//     book: mongoose.model('book', booksSchema)
//   };