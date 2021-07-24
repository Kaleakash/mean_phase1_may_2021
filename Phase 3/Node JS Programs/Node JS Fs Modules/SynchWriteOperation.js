let fs = require("fs");
var msg ="Welcome Again";
//fs.writeFileSync("demo1.txt",msg);    // file get override
fs.writeFileSync("demo1.txt",msg,{flag:"a+"});  // file append mode
console.log("Data store in file");
console.log("Data store in file");