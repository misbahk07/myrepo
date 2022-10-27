const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const AuthorController=require("../controllers/authorController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/author",AuthorController.createAuthor)

router.post("/books",BookController.createBooks)

router.get("/getAllBooks",AuthorController.getAllBooks)

router.get("/getTheAuthor",AuthorController.getTheAuthor)





// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// query Params

// let persons= [
//     {
//     name: "PK",
//     age: 10,
//     votingStatus: false
//  },
//  {
//     name: "SK",
//     age: 20,
//     votingStatus: false
//  },
//  {
//     name: "AA",
//     age: 70,
//     votingStatus: false
//  },
//  {
//     name: "SC",
//     age: 5,
//     votingStatus: false
//  },
//  {
//     name: "HO",
//     age: 40,
//     votingStatus: false
//  }
//  ]

//  router.post("/persons1",function(req,res){
    
//     let voterAge=req.query.voterAge
//     let updatedPersons=[]
//     for(let i=0;i<persons.length;i++){
//         if(persons[i].age>=voterAge){
//             persons[i].votingStatus=true
//             updatedPersons.push(persons)
//         }
//     }
//     res.send({data :persons})
        
//  })




module.exports = router;  