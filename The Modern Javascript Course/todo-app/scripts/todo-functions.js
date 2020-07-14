'use strict'

//fetch existing todos from localStorage
const getSavedTodos = () =>{
    const todosJSON = localStorage.getItem("todos")

    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    }catch(e){
        return []
    }
    

    //parse existing data

    

}

//Save todos to localStorage
const saveTodos = (todos) =>{
    localStorage.setItem("todos",JSON.stringify(todos))
}

//Removes a todo after pressing the (x) using its unique ID\
const removeToDo = (id) =>{
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if(todoIndex > -1){
        todos.splice(todoIndex,1)
    }
}



//flips the completed status of a todo when the checkbox is pressed
const toggleToDo = function(id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    
    //makes sure that a value was found on the array before toggling
    if(todo){
        todo.completed = !todo.completed
    }
}




//Render app todos based on filters
const renderToDos = function(todos, filter){
    const todoElement = document.querySelector("#todo")
    //creates a list of tasks that are not completed
    const filteredToDos = todos.filter((todo) =>{
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hidecompletedMatch = !filters.hideCompleted || !todo.completed//Checks to see if hideCompleted = true or if the value is not completed
        
        return searchTextMatch && hidecompletedMatch
    })

    const incompleteToDos = filteredToDos.filter((todo) => !todo.completed)

    //clear all tasks to make way for the new filtered ones
    todoElement.innerHTML = ""
    todoElement.appendChild(generateSummaryDOM(incompleteToDos))

    if(filteredToDos.length > 0){
        filteredToDos.forEach((todo) =>{
            todoElement.appendChild(generateTodoDOM(todo))
        })
    }else{
        const messageElement = document.createElement("p")
        messageElement.classList.add("empty-message")
        messageElement.textContent = "No to-dos to show"
        todoElement.appendChild(messageElement)

    }


    //render out the filtered todo's
    filteredToDos.forEach((todo) =>{
        generateTodoDOM(todo)
    })
}


//get the DOM elements for an individual note
const generateTodoDOM = (todo) =>{
    const todoElement = document.createElement("label")
    const containerEl = document.createElement("div")
    const todoText = document.createElement("span")
    const checkbox = document.createElement("input")
    const removeButton = document.createElement("button")

    //setup TODO checkbox
    checkbox.setAttribute("type","checkbox")
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener("click",() =>{
        toggleToDo(todo.id)
        saveTodos()
        renderToDos(todos,filters)
    })
    

    //setup TODO text
    todoText.textContent = todo.task
    containerEl.appendChild(todoText)
    todoElement.appendChild(containerEl)

    //setup container
    todoElement.classList.add("list-item")
    containerEl.classList.add("list-item__container")

    //setup TODO button
    removeButton.textContent = "remove"
    removeButton.classList.add("button", "button--text")
    todoElement.appendChild(removeButton)
    removeButton.addEventListener("click", () =>{
        removeToDo(todo.id)
        saveTodos()
        renderToDos(todos,filters)
    })

    

    return todoElement
    
}


//get DOM elements for the list summary
const generateSummaryDOM = (incompleteToDos) =>{
    const summary = document.createElement("h3")
    summary.classList.add("list-title")
    const plural = incompleteToDos.length === 1 ? "" : "s"
    summary.textContent = `You have ${incompleteToDos.length} todo${plural} left`

    return summary
}
