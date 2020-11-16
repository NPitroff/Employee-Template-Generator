// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
        console.log(`Employee name is: ${this.name}`)
    };

    getId(){
        return this.id;
        console.log(`Employee ID is: ${this.id}`)
    };

    getEmail(){
        return this.email;
        console.log(`Employee email is: ${this.email}`)
    }

    getRole(){
        return "Employee";
    }
}



const employee = new Employee(this.name, this.id, this.email)
console.log(employee)

employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();


module.exports = Employee;