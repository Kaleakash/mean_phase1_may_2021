class Employee {
    constructor(id,name,salary){
       // this.id = id;
        this.name = name;
        this.salary = salary;
    }
    calSalary() {
        this.salary = this.salary +5000;
    }
    getSalary() {
        return this.salary;
    }
    getId() {
        return this.id;
    }
    getName(){
        return this.name;
    }
}