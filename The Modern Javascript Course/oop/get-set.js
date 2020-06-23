const data = {
    locations: [],

    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

//runs the data object
data.location = "New Brunswick"
data.location = "Miami"
console.log(data)
