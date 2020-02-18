//testing out functions in javascript

let add = function(a, b){
    return a + b
}
let result = add(10, 1)
console.log(result)

//defaulting arguments

let getScore = function(name = "Anonymous", score = 0){
    return  `Name: ${name}   Score:${score}`
}

let newScore = getScore("Banjo",12)
console.log(newScore)

//Tip meal challenge question

let tipCalc = function(total = 0, tip = 0.15){
    return total * (tip+1)
}

start = 100
tip = 0.10
let total = tipCalc(start, tip)
console.log(`A ${100*tip}% tip on ${start} would come to ${total}`)

//using String Templates
let name = "Alex"
let age = 22
console.log(`Hello my name is ${name}, i am ${age} years old`) 