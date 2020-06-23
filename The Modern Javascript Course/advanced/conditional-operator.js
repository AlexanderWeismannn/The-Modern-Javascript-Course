// const myAge = 7
// const message = myAge >= 18 ? "You can vote" : "You cannot vote"
// console.log(message)


const myAge = 2
const showPage = () => {
    return "Showing Page"
}
const showErrorPage = () => {
    return "Showing error page"
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ["Alex","Ben","Connor","Thales","Kass","Lucas"]
const length = team.length
console.log(length <= 4 ? `Team size: ${length}` : "Too many people on your team")
