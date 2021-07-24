let fs = require("fs");
//ES5 style read asyn operation
fs.readFile("demo2.txt",function(err,data){
        if(!err){
            console.log(data.toString());
        }else {
            console.log(err);
        }
})

//ES6 style read asyn operation

// fs.readFile("demo2.txt",(err,data)=> {

// })

console.log("Finish")