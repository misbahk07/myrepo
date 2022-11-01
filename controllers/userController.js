

const basicCode= async function(req, res) {
  
    console.log( "hey Misbah, congrats you have reached the Handler")
    res.send({ msg: "This is coming from Usercontroller (handler)"})
    }

module.exports.basicCode= basicCode