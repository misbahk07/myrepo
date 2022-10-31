const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController=require("../controllers/authorController")
const PublisherController=require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/author",AuthorController.createAuthor)

router.post("/books",BookController.createBooks)

router.post("/publisher",PublisherController.createPublisher)

router.get("/getAllTheBooks",BookController.getBooks)

router.put("/updation",BookController.updatedBooks)

router.put("/updateRatings",BookController.updateRatings)

// router.put("/:hardCover",BookController.updateKey)

// router.get("/getAllBooks",AuthorController.getAllBooks)   

// router.get("/getTheAuthor",AuthorController.getTheAuthor)   






// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)






module.exports = router;  