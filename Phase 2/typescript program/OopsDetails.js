/*class Employee {
    empId:number=100;
    empName:string="Ravi";

    displayEmpInfo():void {
        console.log("Employee function")
        console.log("id is "+this.empId)
        console.log("name is "+this.empName)
    }
}
let emp1 = new Employee();
emp1.displayEmpInfo();
//emp1.empId=200;*/
// constructor 
var Employee = /** @class */ (function () {
    //empId:number;   // undefined 
    //empName:string;
    //empAge:number;
    function Employee(empId, empName, empAge) {
        this.empId = empId;
        this.empName = empName;
        this.empAge = empAge;
        //this.empId=empId;
        //this.empName=empName;
        //this.empAge=empAge;
    }
    Employee.prototype.displayEmpInfo = function () {
        console.log("id is " + this.empId);
        console.log("name is " + this.empName);
        console.log("salary is " + this.empAge);
    };
    return Employee;
}());
var emp1 = new Employee(100, "Ravi", 21);
emp1.displayEmpInfo();
console.log(emp1.empName); // public 
//console.log(emp1.empId)            //private can't access outside  
var emp2 = new Employee(101, "Ramesh", 24);
emp2.displayEmpInfo();
