let name = "   Alexander Weismann   "

//Length
console.log(name.length)

//upper case
console.log(name.toUpperCase())

//documentation on mdn *(developer.mozilla.org)*

//low case
console.log(name.toLowerCase())

//includes 
let password = "supersecure123"
console.log(password.includes("super"))

//trim
console.log(name.trim())

//Challenge
//isValidPassword

let newpass = "Notrightpasord"

let isValidPassword = function(password) {
    return(password.length > 8 && password.includes("password") == false)
}

console.log(isValidPassword(newpass))