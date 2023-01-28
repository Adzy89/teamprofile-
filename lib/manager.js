const Employee = require("./employee");

class Manager extends Employee {
    constructor (name, id, email, workNumber){
        super(name,id,email)
        this.workNumber = workNumber
    }
    getRole(){
        return 'Manager'
    }
    getWorkNumber () {
        return this.workNumber
    }
  
};

module.exports = Manager;
