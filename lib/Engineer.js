const engineer = require("./engineer");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from engineer.
class Engineer extends engineer{
    constructor(github){
        super(name, id, email)
        this.github = github;
    }
    getGit(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

const engineer = new Engineer(this.name, this.id, this.email, this.git);
console.log(engineer)

engineer.getGit();
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();



module.exports = Engineer