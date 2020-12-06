const Employee = require("./Employee")

//Class for Engineer, extends Employee class.  Added property github and methods getRole() and getGithub()
class Engineer extends Employee {

    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return this.github;
    };
    
    getRole() {
        return `Engineer`;
    };

};

//Exporting Engineer class
module.exports = Engineer;

