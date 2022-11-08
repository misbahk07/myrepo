const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).send({ msg: savedData });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let myToken = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Lithium",
        organisation: "FunctionUp",
      },
      "Shhhhh"
    );
    res.status(200).send({ status: true, token: myToken });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message })
  }
};

const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails })
}catch(error){
 res.status(500).send({status:false,msg:error.message})
}
}

const updateUser = async function (req, res) {

  try{
    let userData = req.body;
  let userId = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
  res.status(200).send({ status: true, data: updatedUser });
}catch(error){
  res.status(500).send({status:false,msg:error.message})
}
};

let deleteUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let flag = req.body
  let deleteThatUser = await userModel.findByIdAndUpdate({ _id: userId }, flag, { new: true })
  return res.status(200).send({ status: true, data: deleteThatUser })
}catch(error){
  res.status(500).send({status:false,msg:error.message})
}
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser