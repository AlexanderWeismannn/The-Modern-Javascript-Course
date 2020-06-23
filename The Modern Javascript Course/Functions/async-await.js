//promise API
const getDataPromise = (num) => new Promise((resolve, reject) => {
    //making fake http request
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 2) : reject("Number must be provided")
    }, 2000)
})


const processData = async () => {
    //similar to promise chaining  except you just call the promise with the data var again
    //so 2 -> 4 -> 8
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log("Data", data)
}).catch((error) => {
    console.log("Error", error)
})