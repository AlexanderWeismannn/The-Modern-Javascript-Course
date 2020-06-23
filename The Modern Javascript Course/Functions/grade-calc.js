//students score, total possible score
//15/20 -> You got a _ (%)!
//A = 90 - 100 B = 80 - 89 C = 70 - 79 D = 60 - 69 F = 0 - 59

let studentGrade = function(score, total){

    if(typeof score === "number" && typeof total === "number"){
        grade = (score / total) * 100
    let letter
    if(grade >= 0 && grade <= 59){
        letter = "F"
    }else if(grade >= 60 && grade <= 69){
        letter = "D"
    }else if(grade >= 70 && grade <= 79){
        letter = "C"
    }else if(grade >= 80 && grade <= 89){
        letter = "B"
    }else{
        letter = "A"
    }

    return letter

    }else{
        throw Error("Error: Non Numerical Arithmatic")
    }
    
}

let score = 10
let total = 10
try{
    myMark = studentGrade(score, total)
    console.log(`You got a ${myMark}, ${grade}`)
}catch(e){
    console.log(e.message)
}

