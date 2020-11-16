// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;


    }
    getSchool(){
        console.log(`This school is ${this.school}`)
        return this.school
    }

    getRole(){
        return "Intern"
    }
}



// intern.getName();
// intern.getId();
// intern.getEmail();
// intern.getRole();
// intern.getSchool();

module.exports = Intern