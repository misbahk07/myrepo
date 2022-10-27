const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false  
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

  router.post("/persons",function(req,res){
    const votingAge=req.query.votingAge
    const updatedPersons=[]
    for(let i=0;i<persons.length;i++){
        if(persons[i].age>=votingAge){
            persons[i].votingStatus=true
            updatedPersons.push(persons[i])
        }
    }
    res.send(updatedPersons)
  })

 

// let players =
//    [
//        {
//            "name": "manish",
//            "dob": "1/1/1995",
//            "gender": "male",
//            "city": "jalandhar",
//            "sports": [
//                "swimming"
//            ]
//        },
//        {
//            "name": "gopal",
//            "dob": "1/09/1995",
//            "gender": "male",
//            "city": "delhi",
//            "sports": [
//                "soccer"
//            ]
//        },
//        {
//            "name": "lokesh",
//            "dob": "1/1/1990",
//            "gender": "male",
//            "city": "mumbai",
//            "sports": [
//                "soccer"
//            ]
//        },
//    ]

//    router.post("/players",function(req,res){ 
//     let newPlayer=req.body
//     let newPlayerName=req.body.name
//     let player = players.find(p => p.name == newPlayerName)
//     if (player){
//         res.send("Player already exists.")
//     }else{
//       players.push(newPlayer) 
//       res.send(players) 
        
//     }

  
//   })

module.exports = router;