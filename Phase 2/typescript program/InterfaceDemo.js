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
var Hdfc = /** @class */ (function () {
    function Hdfc() {
    }
    Hdfc.prototype.withdraw = function () {
    };
    Hdfc.prototype.deposit = function () {
    };
    return Hdfc;
}());
var Sbi = /** @class */ (function () {
    function Sbi() {
    }
    Sbi.prototype.withdraw = function () {
    };
    Sbi.prototype.deposit = function () {
    };
    return Sbi;
}());
//Object using literal style 
var emp1 = { id: 100, name: "Ravi", salary: 12000 };
var emp2 = { id: 101, name: "Ram", salary: 14000, age: 21 };
var emp3 = { id: 102, name: "Raj Deep", salary: 12000 };
