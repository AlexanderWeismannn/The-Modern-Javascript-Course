//variable shadowing -- local var is overiding global
let name  = "Alex"

if(true){
    let name = "Mandrew"
    if(true){
        name = "Jen"
        console.log(name)
    }
}

if(true){
    console.log(name)
}