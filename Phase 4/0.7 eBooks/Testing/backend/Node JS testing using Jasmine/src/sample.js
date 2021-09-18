function sayHello() {
    return "Welcome to Jasmine testing";
}
function check(user,pass){
    if(user=="Raj" && pass=="123"){
        return true;
    }else {
        return false;
    }
}
function vote(){
    return 18;
}
function message() {
   // return "Hello";
}
module.exports={sayHello,check,vote,message}