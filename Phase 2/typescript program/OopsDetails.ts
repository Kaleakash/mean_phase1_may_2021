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
class Employee {
    
constructor(private empId:number,public empName:string,public empAge:number){
        }
    displayEmpInfo():void {
    console.log("id is "+this.empId)
    console.log("name is "+this.empName)
    console.log("salary is "+this.empAge);       
    }
}

let emp1 = new Employee(100,"Ravi",21);
emp1.displayEmpInfo();
console.log(emp1.empName)       // public 
//console.log(emp1.empId)            //private can't access outside  
let emp2 = new Employee(101,"Ramesh",24);
emp2.displayEmpInfo();