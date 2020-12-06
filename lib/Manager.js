const Employee = require("./Employee")

//Class for Manager, extends Employee class.  Added property officeNumber and method getRole() and getOfficeNumber()
class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };
    
    getRole() {
        return `Manager`;
    };

};

//Exporting Manager class
module.exports = Manager;
