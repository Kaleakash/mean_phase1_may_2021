class Employee {
    disEmpInfo():void {
        console.log("This Employee class")
    }
}
class Manager extends Employee{
    disMgrInfo():void {
        console.log("This Manager class")
    }
}
let emp1 = new Employee();
emp1.disEmpInfo();

let mgr1 = new Manager();
mgr1.disMgrInfo();
mgr1.disEmpInfo();