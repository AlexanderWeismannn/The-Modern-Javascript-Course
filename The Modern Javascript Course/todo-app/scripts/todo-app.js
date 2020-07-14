'use strict'

let todos = getSavedTodos()

const filters = {
    searchText: "",
    hideCompleted: false
}


//Listen for new todo creation
document.querySelector("#search-text").addEventListener("input",(e) =>{
    filters.searchText = e.target.value
    renderToDos(todos,filters)
})

document.querySelector("#todo-form").addEventListener("submit", (e) =>{

    e.preventDefault()

    const text = e.target.elements.newInput.value.trim()
    if(text.length > 0){
        //add the to do
        todos.push({
            id: uuidv4(),
            task: text,
            completed: false
        })
        saveTodos(todos)
        renderToDos(todos,filters)
        e.target.elements.newInput.value = ""
    }


   
    
})

document.querySelector("#hide-todo").addEventListener("change",(e) =>{
    filters.hideCompleted = e.target.checked
    renderToDos(todos,filters)

})

//debugger