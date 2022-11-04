const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myMW=require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)

// Protected APIs
router.get("/users/:userId",myMW.authenticate, userController.getUserData)
router.put("/users/:userId",myMW.authenticate, userController.updateUser)
router.delete("/users/:userId",myMW.authenticate,userController.deleteUser)  

module.exports = router;