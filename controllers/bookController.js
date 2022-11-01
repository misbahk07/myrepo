



let demo= function (req,res){
    console.log( "hey Misbah, congrats you have reached the Handler")
    res.send({ msg: "This is coming from Bookcontroller (handler)"})
}


module.exports.demo = demo
