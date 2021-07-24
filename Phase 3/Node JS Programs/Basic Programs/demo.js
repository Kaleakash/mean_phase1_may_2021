console.log("Welcome to Node JS Program")
//document.write("Welcome")
function sayHello(name){
    return "Welcome "+name;
}

var result = sayHello("Ramesh");
console.log(result);
function fun() {
    console.log("Hello")
}
setInterval(fun,1000)