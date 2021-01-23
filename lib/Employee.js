// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`Employee name is: ${this.name}`)
        return this.name;
        
    };

    getId(){
        console.log(`Employee ID is: ${this.id}`)
        return this.id;
        
    };

    getEmail(){
        console.log(`Employee email is: ${this.email}`)
        return this.email;
        
    }

    getRole(){
        return "Employee";
    }
}



// const employee = new Employee(this.name, this.id, this.email)
// console.log(employee)

// employee.getName();
// employee.getId();
// employee.getEmail();
// employee.getRole();


module.exports = Employee;