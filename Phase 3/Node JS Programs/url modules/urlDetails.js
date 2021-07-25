let urlInfo = "http://localhost:9090/welcome?name=ravi&age=21";
let url = require("url");

//console.log(urlInfo);

let urlObj = url.parse(urlInfo,true);
console.log(urlObj);
console.log(urlObj.protocol)
console.log(urlObj.hostname)
console.log(urlObj.port)
console.log(urlObj.pathname)
console.log(urlObj.query)   // string consider if parse second parameter is false 
let obj = urlObj.query;     // it consider as reference if parser second parameter is true 
console.log("Name is "+obj.name)
console.log("Age is "+obj.age) 