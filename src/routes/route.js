const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/movies',function (req,res){
    console.log("The list of movies :",req.params)
    let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
})

 router.get('/films',function (req,res){
    console.log("The Array of films is:",req.params)
   

    let films=[{
        "id":1,
        "name":"The Shining"
    },
    {
        "id":2,
        "name":"Incendies"
    },
    {
        "id":3,
        "name":"Rang de Basanti"
    }]
    
   
    res.send(films)
    
})
router.get('/films/:idNumber',function (req,res){
    let films=[{
        "id":1,
        "name":"The Shining"
    },
    {
        "id":2,
        "name":"Incendies"
    },
    {
        "id":3,
        "name":"Rang de Basanti"
    }]
    let myParams2=req.params.idNumber
   if(myParams2>films.length){
    console.log("Invalid Id")
    res.send("No movie exists with this id")
   }
})

 


router.get('/movies/:indexNumber',function (req,res){
    let moviesName=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
   let myParams1=req.params.indexNumber
   console.log("The path params in the request are :",myParams1)
   
   res.send("The movie at the first index is "+ moviesName[myParams1] )

})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params


    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;
