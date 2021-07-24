let fs = require("fs");
//var data = fs.readFileSync("info.txt");
//var data = fs.readFileSync("tsconfig.json");
var data = fs.readFileSync("demo1.txt") 
//console.log(data);      // display the in buffer format 
console.log(data.toString())    // converting buffer to string format.
console.log("done!")