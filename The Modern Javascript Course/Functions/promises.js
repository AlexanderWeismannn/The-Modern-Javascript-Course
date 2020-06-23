const getDataCallback = (num,callback) => {
    setTimeout(() =>{
        if(typeof num === "number"){
            callback(undefined, num * 2)
        }else{
            callback("Number must be provided")
        }
    
    },2000)
}

//callback HELL
getDataCallback(2,(err,data) => {
    if(err){
        console.log(err)
    } else {
        getDataCallback(data,(err, data) => {
            if(err){
                console.log("Error")
            }else{
                console.log(data)
            }
        })
    }
})


//promise API
const getDataPromise = (num) => new Promise((resolve, reject) => {
    //making fake http request
    setTimeout(() => {
        typeof num === "number" ? resolve(num * 2) : reject("Number must be provided")
    }, 2000)
})
    

//Promise chaining WAY BETTER LOOKING :")
getDataPromise(10).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log("this is some test data")
}).catch((err) => {
    //error handling 
    console.log(err)
})