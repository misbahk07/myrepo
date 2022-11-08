const jwt = require("jsonwebtoken")

let authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "Shhhhh");

    if (!decodedToken) {
      return res.status(401).send({ status: false, msg: "token is invalid" });
    } else {
      req.decodedToken = decodedToken
      next()
    }

  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

let authorise = function (req, res, next) {
  try {
    let userToBeModified = req.params.userId
    let loggedInUser = req.decodedToken.userId

    if (userToBeModified != loggedInUser)
      return res.status(403).send("logged in user is not allowed to modify the data of requested user.")

    next()
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise