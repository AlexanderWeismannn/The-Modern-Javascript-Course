//Creates a custom object type - Constructor
//Prototypal inheritance
//Person - Person.prototype - Object.prototype - null

class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes

    }
    //method shared between all intances of the Person constuct
    getBio(){
        let bio = `${this.firstName} is ${this.age} years old.`

        this.likes.forEach((like) => {
            bio += ` \n${this.firstName} likes ${like}.`
        })

        return bio
    }

    
    //shared method allowing to change the first and last name of the Person through splitting up the new string into two segments
    set fullName(fullName){
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


//subclass
class Employee extends Person{
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio(){
        let bio = `${this.fullName} is a ${this.position}.`
        return bio
    }

    getYearsLeft(){
        return 65 - this.age
    }


}


class Student extends Person{
    constructor(firstName, lastName, age, grade){
        super(firstName, lastName, age)
        this.grade = grade
    }

    getBio(){
        const status = this.grade < 70 ? "failing" : "passing"
        return `${this.firstName} ${this.lastName} is ${status}`
    }

    updateGrade(change){
        this.grade += change
    }

}

const newStudent = new Employee("Alex", "Wise", 71, "Teacher")
newStudent.fullName = "Joe Mama"
console.log(newStudent.getBio())
