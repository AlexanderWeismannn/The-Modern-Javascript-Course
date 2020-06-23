const createCounter = () =>{
    let count = 0

    return{
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
           return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder
//creates an add10 function with an inherent value of 10 = A
// can then call the function with another value which will corespond to B.
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

//another example
const add100 = createAdder(100)
console.log(add100(-90))


//tipper
const createTipper = (tip) => {
    return (bill) => {
        return (tip * bill)
    }
}

const tip15 = createTipper(.15)
const tip22 = createTipper(.22)
console.log(tip15(100))
console.log(tip22(100))