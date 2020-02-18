let num = 999.56434567
console.log(num.toFixed(2))


console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
let random = Math.floor(Math.random() * 11)
console.log(random)

let makeGuess = function(number){
    min = 1
    max = 5
    let rand = Math.floor(Math.random() * (max - min + 1)) + 1
    return number == rand
}

console.log(makeGuess(3))