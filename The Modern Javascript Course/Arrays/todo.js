//create and array with 5 values
// you have x todos
//Print the first and the second last items

const todos = [{
    task: "Buy food",
    completed: true
},
{
    task: "Make lunch",
    completed: false
},
{
    task: "Go to bed",
    completed: true
}]

//sort the remaining todos(false) first
const sortToDos = function(todos){
    todos.sort(function(a,b){
        if(a.completed && !b.completed){
            return 1
        }else if(!a.completed && b.completed){
            return -1
        }else{
            return 0
        }

    })
}


sortToDos(todos)
console.log(todos)

// const findToDos = function(todos){
//     return filteredToDos = todos.filter(function(todo, index){
//         return !todo.completed
//     })   
// }


// console.log(findToDos(todos))


// const findToDo = function(todos, toDoTask){
//     const index = todos.findIndex(function(todos){
//         return todos.task.toLowerCase() === toDoTask.toLowerCase()
//     })
//     if(index > -1){
//         console.log("task deleted")
//         todos.splice(index,1)
//     }
// }

// findToDo(todos,"buy food")
// console.log(todos)

// console.log(`You have ${array.length} todos`)
// console.log(array[0])
// console.log(array[3])

// //delete the third item
// //add item the end
// //remove the first items from the list
// console.log(array.splice(2,1))
// array.push("val 6")
// console.log(array[4])
// array.shift()
// console.log(array)


// // array.forEach(function(array, index){
// //     console.log(`${index+1}.) ${array}`)
// //     // console.log(index)
// //     // console.log(array)
// // })

// for(let i = 0; i < array.length; i++){
//     const num = i + 1
//     console.log(`${num}.) ${array[i]}`)
// }


