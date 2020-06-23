//Primitive values: string, num, bool, null, undefined
//Object: myObject -- Object.prototype -- null
//Array: myArray -- Array.protoype -- Object.protoype -- null
//Function: myfunc -- Function.prototype -- Object.prototype -- null
//String: myString -- String.prototype -- Object.prototype -- null
//Num: myNum  . . . . . 
//Bool: myBool . . . . .
//-null and -undefined will never be objects

//HTTP Request

//Request - What you want to do
//Response - What was actually done


const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")

//creates a game
let game1

// //event listener on keypress that updates remaining guess and shows the new puzzle
// //after each guess
window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})


const render = () => {
    puzzleEl.innerHTML = ""
    guessEl.textContent = game1.stateMessage

    
    game1.puzzle.split("").forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
    
}


const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector("#reset").addEventListener("click",startGame)

startGame()

// getPuzzle("2").then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })



// getLocation().then((location) => {
//     console.log(`City: ${location.city}, Region: ${location.region}`)
//     //promise chaining to getCountry to get the country code -> full name
//     return getCountryCode(location.country)
// }).then((country) => {
//     console.log(`Country:${country.name}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })





