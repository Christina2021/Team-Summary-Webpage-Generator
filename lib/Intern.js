const Employee = require("./Employee")

//Class for Intern, extends Employee class.  Added property school and methods getRole() and getSchool()
class Intern extends Employee {

    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };

    getSchool () {
        return this.school;
    };
    
    getRole() {
        return `Intern`;
    };

};

//Exporting Intern class
module.exports = Intern;

