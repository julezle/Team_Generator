// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor (name,role,email,id,github) {
        super (name,role,email,id);
        this.github = github;
    }
//functions


}


module.exports = Engineer;