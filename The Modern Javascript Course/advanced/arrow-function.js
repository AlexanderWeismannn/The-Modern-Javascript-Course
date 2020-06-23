//Arrow vs non arrow function
const square = (num) => num * num
    
const squareLong = (num)=>{
    return num * num
}

console.log(square(5))
console.log(squareLong(5))

const people = [{
    name: "Alex",
    age: 22
},{
    name: "Joe Mama",
    age: 42
},{
    name: "Jess",
    age: 28
}]


//Non arrow vs arrow function
const under30 = people.filter(function(person){
    return person.age < 30
})

const under30Arrow = people.filter((person) => person.age < 30)

console.log(under30)
console.log(under30Arrow)

const age22 = people.filter((person) => person.age == 22)
console.log(age22)