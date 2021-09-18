// console.log("Hello");
// var a=10;
// var b=20;
// var sum = a+b;
// console.log("sum of two number "+sum);
function add(a,b){
    var sum = a+b;
    return sum;
}
function sub(a,b){
    var sub = a-b;
    return sub;
}
function mul(a,b){
    var mul = a*b;
    return mul;
}
function div(a,b){
    var div = a/b;
    return div;
}
module.exports={add,sub,mul,div}