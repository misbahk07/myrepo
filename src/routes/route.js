const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

   router.post("/players",function(req,res){ 
    let newPlayer=req.body
    let newPlayerName=req.body.name
    let player = players.find(p => p.name == newPlayerName)
    if (player){
        res.send("Player already exists.")
    }else{
      players.push(newPlayer) 
      res.send(players) 
        
    }

  
  })

module.exports = router;