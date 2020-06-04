// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");


class Manager extends Employee {
    constructor (name,role,email,id,OfficeNumber) {
        super (name,role,email,id);
        this.OfficeNumber = OfficeNumber;
    }
//functions


}



module.exports = Manager;