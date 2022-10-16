const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c")
    return "done"
}

let welcome= function(){
    console.log("Welcome to my application.I am Misbah and a part of FunctionUp Lithium Cohort.")
    return "Welcome"
}

let abc = 2022
module.exports.myUrl = url
module.exports.myFunction = printSomething
module.exports.myIntro = welcome
