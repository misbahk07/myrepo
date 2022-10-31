const AuthorModel=require("../models/authorModel")

let createAuthor=async function(req,res){
    let body=req.body
    let saveAuthor=await AuthorModel.create(body)
    res.send(saveAuthor)
}



module.exports.createAuthor=createAuthor