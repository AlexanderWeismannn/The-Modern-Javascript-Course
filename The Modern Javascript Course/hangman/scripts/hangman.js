
class Hangman {

    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "playing"
    }

    get stateMessage(){
        const joinedWord = this.word.join("")

        if(this.status === "finished"){
            return "Great work! You guessed the word!"
        }else if(this.status === "failed"){
            return `Nice try, the word was "${joinedWord}"`
        }else{
            //they are still playing
            return `Guesses left: ${this.remainingGuesses}`
        }

    }

    gameState(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === " ")

        // ran out of guesses
        if(this.remainingGuesses === 0){
            this.status = "failed"
        }else if(finished){
            this.status = "finished"
        }else{
            this.status = "playing"
        }
    }

    get puzzle(){
        let puzzle = ""
        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === " "){
                puzzle += letter
            }else{
                puzzle += "*"
            }
        })
    
        return puzzle
    }

    makeGuess(guess){
        if(this.status === "playing"){
            guess = guess.toLowerCase()
            const uniqueGuess = !this.guessedLetters.includes(guess)
            const isBadGuess = !this.word.includes(guess)
        
            //checks if the guess is unique
            if(uniqueGuess){
                this.guessedLetters.push(guess)  
            }
        
            //checks if the guess is unique and the letter is not in the word
            if(uniqueGuess && isBadGuess ){
                this.remainingGuesses -=1
            }
        
            this.gameState()
        }
    }
//end of constructor
}

