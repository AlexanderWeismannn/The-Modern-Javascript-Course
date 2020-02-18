let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
}

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723
}

let getSummary = function(book){
  return{
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} by ${book.author} is ${book.pageCount} pages long`
  }

}

let normalSum = getSummary(myBook)
let extraSum = getSummary(otherBook)

console.log(normalSum.pageCountSummary)


let converter = function(fahrenheit){
  return{
    og_fahrenheit:fahrenheit,
    kelvin:(fahrenheit + 459.67) * (5/9),
    celsius:(fahrenheit - 32) * (5/9)
  }
}

let val = converter(74)
console.log(val)
