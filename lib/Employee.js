// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name,role,email,id) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
    }
//functions

// TEST function = WORKS!
// getInfo() {
//     //returning template string
//     return `Name: ${this.name}, Email: ${this.email}`;
// }

};

//TEST = WORKS!
// var amanda = new Employee("Amanda", "trainer", "a@aol.com");
// console.log(amanda.getInfo());


module.exports = Employee;