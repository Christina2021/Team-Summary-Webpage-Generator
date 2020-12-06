const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

const managerPrompts = [`Hello, manager! Please enter in your name:`, `Please enter in your id:`, `Please enter in your email:`, `Please enter in your office number:`];
const employeeGenericPrompts = [`Please enter in your name:`, `Please enter in your id:`, `Please enter in your email:`, `Please enter in your office number:`]

//First inquire about Manager
function managerInformation() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: managerPrompts[0],
                name: 'name'
            },
            {
                type: 'input',
                message: managerPrompts[1],
                name: 'id'
            },
            {
                type: 'input',
                message: managerPrompts[2],
                name: 'email'
            },
            {
                type: 'input',
                message: managerPrompts[3],
                name: 'officeNumber'
            },
        ])
        .then((response) => {
            let managerInfo = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(managerInfo);
            addEmployee();
        });
}

managerInformation();

//Then inquire about Team Members
function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: `Which type of team member would you like to add?`,
                name: 'Role',
                choices: [
                    'Engineer',
                    'Intern',
                    'There are no more employees to be added'
                ]
            }
        ])
        .then((response) => {
            if(response.Role === 'There are no more employees to be added') {
                //ADD FUNCTION LATER TO RENDER HTML PAGE!!!!!!!!!!!!
                console.log('Done', employees)
            } else {
                employeeInformation(response.Role);
            };
        });
};

/*
//Receive team member information
function employeeInformation(role) {
    switch (role){

    }

    inquirer
        .prompt([

        ])


};
*/

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
