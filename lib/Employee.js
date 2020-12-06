//Class for Employee.  Will have constructor with name, id, and email.  Will also have methods to return name, id, email, and role.
class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };
    
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return `Employee`;
    };

};

//Exporting Employee class
module.exports = Employee;


