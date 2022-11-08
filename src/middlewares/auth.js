const jwt = require("jsonwebtoken")

let authenticate = function (req, res, next) {
  let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "Shhhhh");
  if (!decodedToken) {
    return res.send({ status: false, msg: "token is invalid" });
  } else {
    req.decodedToken = decodedToken
    next()
  }

}

let authorise = function (req, res, next) {
  let userToBeModified = req.params.userId
  let loggedInUser = req.decodedToken.userId

  if (userToBeModified != loggedInUser)
    return res.send("logged in user is not allowed to modify the data of requested user.")

  next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise