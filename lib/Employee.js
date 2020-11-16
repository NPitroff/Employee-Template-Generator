// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        console.log(this.name + "Class")
    };

    getId(){
        console.log(this.id + "Class")
    };

    getEmail(){
        console.log(this.email + "Class")
    }

    getRole(){
        console.log(this.role + "Class")
    }
}



const employee = new Employee(this.name, this.id, this.email, this.role)

employee.getName();
employee.getId();
employee.getEmail();

module.exports = Employee;