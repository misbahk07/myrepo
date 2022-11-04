const jwt= require("jsonwebtoken")
let authenticate=function(req,res,next){
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "Shhhhh");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

   next()
}


module.exports.authenticate=authenticate