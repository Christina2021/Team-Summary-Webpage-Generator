//Dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Pathways
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Rendering html file
const render = require("./lib/htmlRenderer");

//List of Employees
const employees = [];

//Function to receive Manager's information.
function managerInformation() {

    const managerPrompts = [`Hello, manager! Please enter in your name:`, `Please enter in your id:`, `Please enter in your email:`, `Please enter in your office number:`];

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

            //Create new Manager object, add it to the employees array, then call addEmployee function.
            let managerInfo = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(managerInfo);
            addEmployee();

        });
};

//Function to ask if the user would like to add another employee.
function addEmployee() {

    inquirer
        .prompt([
            {
                type: 'list',
                message: `Which type of team member would you like to add?`,
                name: 'chosenRole',
                choices: [
                    'Engineer',
                    'Intern',
                    'There are no more employees to be added'
                ]
            }
        ])
        .then((response) => {
            
            //If the user does not want to add more employees, will render html file.  Otherwise, employeeInformation function will be called.
            if(response.chosenRole === 'There are no more employees to be added') {
                //ADD FUNCTION LATER TO RENDER HTML PAGE!!!!!!!!!!!!
                console.log('Done', employees)
            } else {
                employeeInformation(response.chosenRole);
            };
        });
};


//Function for user to enter in another employee's information.
function employeeInformation(specificRole) {
    //Sets variable depending on if role is for Engineer or Intern.
    role = specificRole.toLowerCase();

    const employeeGenericPrompts = [`Please enter in the ${role}'s name:`, `Please enter in the ${role}'s id:`, `Please enter in the ${role}'s email:`]

    inquirer
        .prompt([
            {
                type: 'input',
                message: employeeGenericPrompts[0],
                name: 'name'
            },
            {
                type: 'input',
                message: employeeGenericPrompts[1],
                name: 'id'
            },
            {
                type: 'input',
                message: employeeGenericPrompts[2],
                name: 'email'
            },
            {
                //Will only prompt for engineer role
                type: 'input',
                message: `Please enter in the engineer's GitHub username:`,
                name: 'github',
                when: role === 'engineer'
            },
            {
                //Will only prompt for intern role
                type: 'input',
                message: `Please enter in the intern's school name:`,
                name: 'school',
                when: role === 'intern'
            },
        ])
        .then((response) => {
            //Will create a new object depending if role is for an engineer or intern, then will push the new object to the employees array.
            switch (role) {
                case 'engineer':
                    let engineerInfo = new Engineer(response.name, response.id, response.email, response.github);
                    employees.push(engineerInfo);
                    break;
                default:
                    let internInfo = new Intern(response.name, response.id, response.email, response.school);     
                    employees.push(internInfo);
            };
            //Will call function addEmployee if user wants to add more
            addEmployee();
        });
};


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

//Call
managerInformation();

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
