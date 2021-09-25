// ES5 style 
function Employee() {
    this.id = 100;
    this.display = function() {
        return "This is display function";
    }
}
Employee.prototype.info= function(name) {
    this.name = name;
    return "This is info function";
}
// ES6 style 
class Customer {
    constructor(cid,cname){
        this.cid= cid;
        this.cname = cname;
    }
    displayCustInfo() {
        return "Welcome "+this.cname;
    }
}