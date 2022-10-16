const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const abc=require('../validator/formatter')
//importing external package
const underscore = require('underscore');
const lodash = require('lodash');


const { currentDate, currentMonth } = require('../util/helper');

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    console.log("Introducing Myself",xyz.myIntro())
    console.log("Current Date is :",currentDate())
    console.log("Current Month is :",currentMonth())// returns the month as an integer (0-1
     //  Note that January is represented as 0 and December as 11.
   
     console.log("Calling the trim function:",abc.trimString())
     console.log("Calling the LowerCase function:",abc.lowerCase())
     console.log("Calling the UpperCase function:",abc.upperCase())

     
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)

    let array=["january","febuary","march","april","may","june","july","august","september","oct","nov","dec"]
      let answer=lodash.chunk(array,4)  
      console.log("The Example of Chunk is :",answer)

    let odd=[1,3,5,7,9,11,13,15,17,19]
    let numbers=lodash.tail(odd) 
    console.log("The Example of tail is :",numbers)

    
    let arrays=lodash.union([1,2,2],[4,5,4],[9,6,6],[11,12,13,11])
    console.log("The Example of union is :",arrays)

    let pairExample=lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter"]])
    console.log("The example of fromPairs function is :",pairExample)

    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

