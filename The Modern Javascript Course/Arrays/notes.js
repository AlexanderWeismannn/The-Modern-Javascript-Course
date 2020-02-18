//const notes = ["Note 1", "Note 2", "Note 3"]
const notes = [{
    title: "My next trip",
    body: "i would like to travel somewhere"
}, {
    title: "Things i like",
    body: "i like food and stuff"
}, {
    title: "Things i hate",
    body: "Nothing"

}]

//findIndex() returns the index of the val
// const findNote = function(notes, noteTitle){
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


//find returns the value directly not the index of the value
// const findNote = function(notes, noteTitle){
//     const note = notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note
// }

// const findNotes = function(notes, query){
//     return filterNotes = notes.filter(function(note, index){
//         const titleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const bodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return titleMatch || bodyMatch
//     })

// }

// console.log(findNotes(notes,"like"))


//notes.pop()
//notes.push("New Note")
//notes.shift() moves the array over
//1 2 3 4
//2 3 4

//notes.splice(1,0,"THIS is NEW")

//console.log(notes[1])
//console.log(notes[notes.length - 1])

// for(let i = 0; i < 3; i++){
//     console.log(notes[i])
// }

// for(let i = 0; i < notes.length; i++){
//     console.log(notes[i])
// }

//notes.indexOf("Note 2")
// returns the index of the value stated

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === "Things i like"
// })
// console.log(index)

const sortNotes = function(notes){
    notes.sort(function(a,b){
        //-1 if a comes first
        // 1 if b comes first
        // 0 stay in order
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)
