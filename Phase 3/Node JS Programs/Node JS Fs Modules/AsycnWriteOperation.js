let fs = require("fs");
var msg = "Welcome to Node JS Async Write Operation";
// content override 
// fs.writeFile("demo2.txt",msg,(err)=> {
//     if(!err){
//         console.log("Data stoerd in file")
//     }
// });
// content append 
fs.writeFile("demo2.txt",msg,{flag:"a+"},(err)=> {
    if(!err){
        console.log("Data stoerd in file")
    }
});
console.log("Normal Statement1")
console.log("Normal Statement2")