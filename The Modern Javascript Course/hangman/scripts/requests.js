const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    }else{
        throw new Error("Unable to Get New Puzzle")
    }
    
}


const getCountryCode = async (countryCode) => {
    const response = await fetch(`//restcountries.eu/rest/v2/all`)

    if(response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }else{
        throw new Error("Unable to Retrieve Country Code")
    }
}



const getLocation = async () => {
    const response = await fetch("//ipinfo.io/json?token=53f4568ae6e94e")

    if(response.status === 200){
        return response.json()
    }else{
        return new Error("Unable to retireve IP")
    }
}

//combines getLocation() and getCountryCode() asyncronously to return the country in its own function
const getCurrentCountry = async () => { 
    const location = await getLocation()
    const country = await getCountryCode(location.country)
    return country
}

//old way using promise chaining instead of async : await
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if(response.status === 200) {
//             return response.json()
//         }else{
//             throw new Error("unable to retrieve new puzzle")
//         }

//     }).then((data) => {
//         return data.puzzle
//     })
// }





