'use strict'

//DOM - Document Model Object
let notes = getSavedNotes()

const filters = {
    searchText: "",
    sortBy: "byEdited"
}

//called before user interaction so that something is displayed
renderNotes(notes,filters)

//event listener for New Note button to change text
document.querySelector("#create-note").addEventListener("click", (e) =>{
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: "",
        body: "",
        createdAt: timestamp,
        updatedAt: timestamp

    }) 
    savedNotes(notes)
    location.assign(`/edit.html#${id}`)
})

//event listener to listen for user text input
document.querySelector("#search-text").addEventListener("input",(e) =>{
   filters.searchText = e.target.value
   renderNotes(notes,filters)
})

//event listener for filter change
document.querySelector("#filter-by").addEventListener("change", (e)=>{
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})

//event listener to store / render notes
window.addEventListener("storage", (e)=>{
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// console.log(now.format("MMMM Do, YYYY"))

// const nowTimeStamp = now.valueOf()

// const birthday = moment().year(1997).month(9).date(12)
// console.log(birthday.format("MMMM D, YYYY"))

