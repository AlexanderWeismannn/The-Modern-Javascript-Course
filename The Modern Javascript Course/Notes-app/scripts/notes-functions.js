'use strict'

//read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    try{
        return notesJSON ? JSON.parse(notesJSON) : []
    }catch(e){
        // if there is an error with the data simply return a new empty []
        return []
    }
    
}

//After (x) button is pressed removes the note using its unique ID
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//abstracts saving notes to local storage as "savedNotes"
const savedNotes = (notes) => {
    return localStorage.setItem("notes", JSON.stringify(notes))
}

//generates the DOM(DOCUMENT OBJECT MODEL) struct for a note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement("a")
    const textElement = document.createElement("p")
    const statusElement = document.createElement("p")

    

    //note title 
    if(note.title.length > 0){
        textElement.textContent = note.title
    }else{
        textElement.textContent = "Unamed Note"
    }

    textElement.classList.add("list-item__title")
    noteElement.appendChild(textElement)

    //setup link
    noteElement.setAttribute("href",`/edit.html#${note.id}`)
    noteElement.classList.add("list-item")

    //Setup the status message
    statusElement.textContent = generateLastEdited(note.updatedAt)
    statusElement.classList.add("list-item__subtitle")
    noteElement.appendChild(statusElement)
    
    return noteElement
}

//called by renderNotes to choose how to display the notes
const sortNotes = (notes, sortBy) => {

    if(sortBy == "byEdited"){
        return notes.sort((a,b) =>{
            if(a.updatedAt > b.updatedAt){
                return -1
            }else if(a.updatedAt < b.updatedAt){
                return 1
            }else{
                return 0
            }
        })

    }else if(sortBy == "byCreated"){
        return notes.sort((a,b) =>{
            if(a.createdAt > b.createdAt){
                return -1
            }else if(a.createdAt < b.createdAt){
                return 1
            }else{
                return 0
            }
        })

    }else if(sortBy == "byAlpha"){
        return notes.sort((a,b) =>{
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            }else if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            }else{
                return 0
            }
        })
    }else{
        return notes
    }

}


//Render Application notes
const renderNotes = (notes, filters) =>{
    const notesEl =  document.querySelector("#notes")
    notes = sortNotes(notes,filters.sortBy)
    //creates list of notes based on filtered parameters
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    //clears all displayed values for notes
     notesEl.innerHTML = ""

    //renders to #notes each elements title  
    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) =>{
            const noteElement = generateNoteDOM(note)
            notesEl.appendChild(noteElement)
        })
    }else{
        const empytMessage = document.createElement("p")
        empytMessage.textContent = "No notes to show"
        empytMessage.classList.add("empty-message")
        notesEl.appendChild(empytMessage)
    }
    
}

//generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
   


