function info() {
    document.write("<br/>Hello")
}
info();
info();
info();

(function(){
    document.write("<br/> IIFE Function")
})();

(function(){
    document.write("<br/> Another IIFE Function")
})();
/*
function Outer() {
    var fname="Raju";
    document.write("<br/>In outer function")
    document.write(fname)   // yes 
    function Inner() {
        document.write("<Br/>")
        document.write("Inside Inner function<br/>") // yes
        document.write(fname)
    }
    Inner();
}
Outer();
document.write("<br/> "+fname)
*/
document.write("<br/> Closure Concept");
function Outer() {
    var count =0;
    document.write("<br/>I Came In outer")
    function Inner() {
        document.write("<br/>I Came In Inner")
        return ++count;
    }
    return Inner;
}
var obj = Outer();
document.write(obj())
document.write(obj())
document.write(obj())
document.write(obj())

