  
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, title = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email
        this.title = title;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    
    getEmail() {
        return this.email
    }
    
  }

  module.exports = Employee;