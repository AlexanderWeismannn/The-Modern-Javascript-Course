'use strict'

const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeElement  = document.querySelector("#remove-note")
const dateElement = document.querySelector("#last-edited")
//get the unique id of the note
const noteID = location.hash.substring(1)
//take in the array of stored notes
let notes = getSavedNotes()
//check if the ID = a saved note
let note = notes.find(note => note.id === noteID)

if(!note){
    location.assign("/index.html")
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

//update changes to the note title
titleElement.addEventListener("input", (e) =>{
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

//update changes to the note body
bodyElement.addEventListener("input", (e) =>{
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

removeElement.addEventListener("click", (e) =>{
    removeNote(note.id)
    savedNotes(notes)
    location.assign("/index.html")

})

window.addEventListener("storage", (e) =>{
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue)
        note = notes.find(note => note.id === noteID)
        
        if(!note){
            location.assign("/index.html")
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }


})