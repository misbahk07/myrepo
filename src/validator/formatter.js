function trimStr(){
let str='     FunctionUp   '
return str.trim()
}


function lowerCaseStr(){
    let str="FUNCTION"
    return str.toLowerCase()
    }

 function upperCaseStr(){
        let str="functionup"
        return str.toUpperCase()
        }
module.exports.trimString=trimStr
module.exports.lowerCase=lowerCaseStr
module.exports.upperCase=upperCaseStr