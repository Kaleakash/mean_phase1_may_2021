/*
function Employee() {
    this.id = 100;
    this.fname = "Ravi";
    this.displayEmpInfo = function() {
        document.write("Employee class function")
        document.write("id is "+this.id)
        document.write("name is "+this.fname)
    }
}
var emp1 = new Employee();
emp1.displayEmpInfo();
*/
//1st example 
/*class Employee {
    id = 100;
    fname="Ravi";
    displayEmpInfo() {
        document.write("<br/>Employee class function")
        document.write("<br/> Id is  "+this.id)
        document.write("<br/> Name is  "+this.fname)
    }
}
let emp1 = new Employee();
emp1.displayEmpInfo();
*/
//2nd Example 
/*
class Employee {
    constructor() {
            document.write("Object created...")
    }
    displayEmpInfo() {
        document.write("<br/>Employee function")
    }
}
let emp1 = new Employee();
emp1.displayEmpInfo();
emp1.displayEmpInfo();
emp1.displayEmpInfo();
*/

//3rd Example 
/*class Employee {
    static count=0;
    constructor(id,fname){
      this.id = id;     // this instance variable consider. 
      this.fname = fname;
      Employee.count++;  
    }
    //constructor() {} multiple constructor doesn't support 
    displayEmpInfo() {
        document.write("<br/>Employee function")
        document.write("<br/> Id is "+this.id)
        document.write("<br/> Fname is "+this.fname);
        document.write("Static "+Employee.count)
    }
}
let emp1 = new Employee(100,"Ravi");
let emp2 = new Employee(101,"Reeta");
emp1.displayEmpInfo();
emp2.displayEmpInfo();
*/
//4th Example : Inheritance 
class Employee {
    constructor() {
        document.write("Employee object")
    }
    displayEmpInfo(){
        document.write("Employee class function")
    }
    dis() {
        document.write("employee class function")
    }
}
class Manager extends Employee {
    constructor() {
        super();        // to call super class constructor 
        console.log("Manager object")
    }
    displayMgrInfo() {
        document.write("<br/>Manager class function")
    }
    dis() {
        document.write("manager class function")
    }
}

let mgr = new Manager();
mgr.displayEmpInfo();
mgr.displayMgrInfo();
mgr.dis();
mgr=null;
mgr.dis();