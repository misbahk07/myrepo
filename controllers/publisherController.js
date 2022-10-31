const PublisherModel=require("../models/publisherModel")

let createPublisher=async function(req,res){
    let data = req.body
    let saveData=await PublisherModel.create(data)
    res.send(saveData)
}

module.exports.createPublisher=createPublisher




