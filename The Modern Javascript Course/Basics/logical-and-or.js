let temp = -1

//using logical and - or

if(temp >= 60 && temp <= 90){
    console.log("It's nice out")
}else if(temp <= 0 || temp >= 120){
    console.log("WARNING: Don't go outside")
}else{
    console.log("There weather is ok")
}


let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log("Two Vegan Dishes")
}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("One Vegan and One Normal Dish")
}else{
    console.log("Two Normal Dishes")
}
