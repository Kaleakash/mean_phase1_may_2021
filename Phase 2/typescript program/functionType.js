/*function add(a,b){

}
add(10,20);
add("Ravi",20);
add(true,false);
add();*/
function add(a, b) {
    console.log(a + b);
}
//add();        number of parameter must be match 
//add(100,"Ravi")   type of parameter must be match 
add(100, 200);
add(1, 2);
add(10, 20);
//optional parameter 
function empDetails(id, name, salary, age) {
    console.log("id is " + id + " name is " + name + " Salary is " + salary + " age " + age);
}
empDetails(100, "Ramesh", 12000);
empDetails(101, "Lokesh", 18000, 21);
empDetails(102, "Ajay");
// default initialization 
function customerDetails(cid, cname, age, city) {
    if (age === void 0) { age = 18; }
    if (city === void 0) { city = "Bangalore"; }
    console.log("id " + cid + " name " + cname + "age " + age + "city " + city);
}
customerDetails(100, "Ravi", 21, "Mumbai");
customerDetails(101, "Mahesh", 32);
customerDetails(102, "Balaji");
customerDetails(103);
//function with no return type 
function display() {
    console.log("Welcome to display function");
}
display();
//function with return number madatory 
function addNumber(a, b) {
    var add = a + b;
    return add;
}
//function with return string value 
function sayHello(name) {
    return "Welcome user " + name;
}
console.log(sayHello("Ravi"));
//function with any return type or may not return 
function info(a) {
    if (a > 100) {
        return true;
    }
    else {
        return "No";
    }
}
console.log(info(150));
console.log(info(50));
