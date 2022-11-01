

let AnotherbasicCode=function(req,res){
    console.log( "hey Misbah, congrats you have reached the Handler")
    res.send({ msg: "This is coming from AuthorController (handler)"})
}




module.exports.AnotherbasicCode=AnotherbasicCode