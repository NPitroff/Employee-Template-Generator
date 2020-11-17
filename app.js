const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { error } = require("console");
var employees = [];
// CALLING FUNCTIONS FROM THE Employee.js//
function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please Enter Manager Name:",
      },
      {
        type: "input",
        name: "managerID",
        message: "Please Enter Manager ID:",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please Enter Manager Email:",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "Please Enter Manager Office Number:",
      },
    ])
    .then((response) => {
      console.log(response);
      const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice)
console.log(manager)
        employees.push(manager);
      teamMembers();
    });
}
function teamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if(response.memberChoice === "I don't want to add any more team members"){
           fs.writeFile(outputPath, render(employees), function(err){
            if(err) throw err 
            console.log("File Created Successfully")
            console.log("Goodbye")
            process.exit(0);
           })
        
      }else if(response.memberChoice === "Engineer"){
          engineerInfo();
      } else{
          internInfo();
      }
    });
}
//////////////////////////////////////////////////
function engineerInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "eName",
          message: "Please Enter Engineer Name:",
        },
        {
          type: "input",
          name: "eID",
          message: "Please Enter Engineer ID:",
        },
        {
          type: "input",
          name: "eEmail",
          message: "Please Enter Engineer Email:",
        },
        {
          type: "input",
          name: "eGithub",
          message: "Please Link Engineers Github:",
        },
      ])
      .then((response) => {
        console.log(response);
        const engineer = new Engineer(response.eName, response.eID, response.eEmail, response.eGithub);
console.log(engineer)
          employees.push(engineer);
        teamMembers();
      });
  }
/////////////////////////////////////////////////////////
  function internInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Please Enter Manager Name:",
        },
        {
          type: "input",
          name: "managerID",
          message: "Please Enter Manager ID:",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Please Enter Manager Email:",
        },
        {
          type: "input",
          name: "managerOffice",
          message: "Please Enter Manager Office Number:",
        },
      ])
      .then((response) => {
        console.log(response);
        const intern = new Intern(this.name, this.id, this.email, this.school)
console.log(intern)
          employees.push(intern);
        teamMembers();
      });
  }

managerInfo();



//##################################################################################################///
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
