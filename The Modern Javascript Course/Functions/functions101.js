

let greetUser = function(){
    console.log("Welcome!")
}

greetUser()

let square = function(num){
    let result = num * num
    return result
}

let val1 = square(3)
let val2 = square(4)

console.log(val1)
console.log(val2)


let ftoc = function(fahr){
    let celsius = ((fahr - 32) * 5/9) + "C"
    return celsius
}

let degrees = ftoc(32)
console.log(degrees)