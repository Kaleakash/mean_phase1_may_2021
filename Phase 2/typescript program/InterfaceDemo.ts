/*interface Emp {
        id:number;
        name:string;        //set of variables
        empInfo():void;     // set of function but only 
                            // declaration 
}
// class always implements interface it can 
// implements more than one interface. 
// whichever class implements any interface that 
//class must be provide the body for all incomplete 
// function / method belong to that interface 
// In type script we have to re-declare those variable 
//once again in class which belong to that interface. 
class EmployeeInfo implements Emp {
    id:number;
    name:string;
    empInfo():void {
        console.log("class body provided")
    }
}*/

// it provide only specifiction 
interface Bank {
    withdraw():void;
    deposit():void;
}
class Hdfc implements Bank {
    withdraw():void {

    }
    deposit():void {

    }
}
class Sbi implements Bank {
    withdraw():void {

    }
    deposit():void {

    }
}
// interface with variable which help to 
//create object of specific type. 
interface Employee {
    id:number;
    name:string;
    salary:number;
    age?:number;        // optional variable          
}
//Object using literal style 

let emp1:Employee={id:100,name:"Ravi",salary:12000}
let emp2:Employee ={id:101,name:"Ram",salary:14000,age:21}
let emp3:Employee = {id:102,name:"Raj Deep",salary:12000}







