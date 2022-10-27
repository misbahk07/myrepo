const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});


router.get("/sol1",function(req,res){
   let arr=[1,2,3,5,6,7]
   let n= (arr.length)+1
   let consecutiveSum= n*(n+1)/2

   let total = 0;
   for (var i in arr) {
       total =total+ arr[i];
   }
   let missingNumber= consecutiveSum - total
   res.send({msg :missingNumber})




})

router.get("/sol2",function(req,res){
let arr= [33, 34, 35, 37, 38]
let len= arr.length

let total = 0;
for (var i in arr) {
    total += arr[i];
}

let firstDigit= arr[0]
let lastDigit= arr.pop()
let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
let missingNumber= consecutiveSum - total

res.send(  { data: missingNumber  }  );
});






// *****************************************

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

//   router.post("/persons",function(req,res){
//     const votingAge=req.query.votingAge
//     const updatedPersons=[]
//     for(let i=0;i<persons.length;i++){
//         if(persons[i].age>=votingAge){
//             persons[i].votingStatus=true
//             updatedPersons.push(persons[i])
//         }
//     }
//     res.send(updatedPersons)
//   })

 

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