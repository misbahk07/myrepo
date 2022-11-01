const express = require('express');
const router = express.Router();

// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController=require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/basicRoute",UserController.basicCode)
router.get("/anotherRoute",BookController.demo)
router.get("/lastRoute",AuthorController.AnotherbasicCode)



// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid1, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;