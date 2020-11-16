const Employee = require("./Employee");


// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from engineer.
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }

    getGithub(){
        return this.github;
        console.log(`Engineer's Github is: ${this.github}`)
    }

    getRole(){
        return "Engineer";
    }
}


// engineer.getGithub();
// engineer.getName();
// engineer.getId();
// engineer.getEmail();
// engineer.getRole();



module.exports = Engineer