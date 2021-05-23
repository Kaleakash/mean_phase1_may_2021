//normal type of function 
function info() {
    document.write("<br/>Normal function style")
}
info();
//Expression style function with function name
let dis = function display() {
    document.write("<br/> Expression style function")
}
//display();    we can't call function using display
dis();
//Expression style function with anonymous style 
let display = function() {
    document.write("<br/> Expression style function with anonymouse")
}
display();

let addNumber = function(a,b){
    var sum = a+b;
    return sum;
}
document.write("<br> Sum is "+addNumber(1,2))

//Arrow function mean no name and no function keyword. 
let abc = ()=>document.write("<br/>Welcome to Arrow function")
abc();
let sumOfNumber = (a,b)=>a+b;       // by default return value without return keyword. 
document.write("<br/> Sum of two number using arrow is "+sumOfNumber(2,4))

let findLargest = (a,b)=> {
    if(a>b){
        return "1st is largest";
    }else {
        return "2nd is largest";
    }
}
document.write("<br> Largest of two number using arrow function "+findLargest(20,4))

//callback function 

function sayHello(fname,callback){
    return "Welcome "+callback(fname);
}

let maleInfo = function(fname){
    return "Mr "+fname;
}
let femaleInfo = function(fname){
    return "Miss "+fname;
}
document.write("<br> Callback function concept")
document.write("<br/>")
document.write(sayHello("Raj",maleInfo));
document.write("<br/>")
document.write(sayHello("Reeta",femaleInfo));
document.write("<br/>")
document.write(sayHello("Ajay",function(fname){
    return "Mr "+fname;
}));
document.write("<br/>")
document.write(sayHello("Seeta",(fname)=> {
    return "Miss "+fname;
}))

let num=[100,200,300,400,500];
let displayNum = function(n){
    document.write("<br> Value is "+n);
}
//This type of code if you want to to re-usability and logic is big as well as complex 
// forEach() function take callback function as a parameter to display the output 
document.write("<br> using expression style")
num.forEach(displayNum);      
document.write("<br> using expression style with anonymous function")
//this type of code is use when code using harldy one or two type and logic is simple. 
num.forEach(function(n){
    document.write("<br> Valule is "+n);
})
//this type of code is use when code using harldy one or two type and logic is simple. 
document.write("<br> using arrow style")
num.forEach((n)=>document.write("<br> VAlue is "+n))











