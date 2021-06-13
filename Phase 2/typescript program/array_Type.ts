let num:number[] = [100,200,300,400,500];
let names:string[]=["Ravi","Ramesh","Lokesh","Rajesh"];
let info:any[]=[100,"Ramesh",true,200];

let num1:Array<number>=[100,200,300,400];
let num2:Array<number>=new Array();
num2.push(200);
num2.push(300);
console.log(num);
console.log(num[0]);
num.forEach(v=>console.log(v));
