const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")
const PublisherModel=require("../models/publisherModel")


let createBooks=async function(req,res){
    let data=req.body
let {author,publisher}=data
  
    if(!author)
        return res.send("Please provide AuthorId.")

    if(!publisher)
        return res.send("Please provide PublisherId.")

   let checkAuthor=await AuthorModel.findById(data.author)
   if (!checkAuthor) return res.send("Author is not present")

   let checkPublisherr=await PublisherModel.findById(data.publisher)
   if (!checkPublisherr) return res.send("Publisher is not present")

   let createThatBook=await BookModel.create(data) 
       res.send({msg :createThatBook})

}

let updatedBooks=async function(req,res){
   let findPublisher=await PublisherModel.find({name:{$in:["Penguin","HarperCollins"]}})
   
   const arrOfPublisher=findPublisher.map(publisher=>publisher._id)
   const result=await BookModel.updateMany({publisher:{$in:arrOfPublisher}},{$set:{isHardCover:true}})

   res.send({msg :result})


}

let updateRatings=async function(req,res){
  
   let findAuthorByRating=await AuthorModel.find({rating:{$gt:3.5}})

   const arrOfAuthor=findAuthorByRating.map(author=>author._id)
   // const result=await BookModel.updateMany({author:{$in:arrOfAuthor}},{$set:{price:price+20}})

   res.send({msg :result})


}


//  else if(!ObjectId.isValid(authorId)){
//     res.send("Author is not present")

//  }else if(!publisherId){
//     res.send("Publisher Details is required.")
//  }else if(!ObjectId.isValid(publisherId)){
//     res.send("publisher is not present.")
//  }
//  else{
//     let createThatBook=await BookModel.create(data) 
//     res.send({msg :createThatBook})
//  }



let getBooks=async function(req,res){
   let SaveAllBooks=await BookModel.find().populate('author').populate('publisher')
   res.send(SaveAllBooks)
}

// let updateKey=async function(req,res){
//   let saveChange=await await BookModel.find().select({publisher:1,_id:0})
//    res.send(saveChange)
// }


// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find()
//     res.send({msg: allBooks})
// }

module.exports.createBooks= createBooks
module.exports.getBooks= getBooks
module.exports.updatedBooks=updatedBooks
module.exports.updateRatings=updateRatings
// module.exports.updateKey=updateKey