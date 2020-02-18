let restaurant = {
    name: "Cora's",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailabilty: function(partySize){
       if((this.guestCount + partySize) > this.guestCapacity){
           return false
       }else{
           return true
       }
    },
    seatParty: function(partySize){  
        this.guestCount+= partySize    
    },

    removeParty: function(partySize){
        this.guestCount -= partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailabilty(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailabilty(4))