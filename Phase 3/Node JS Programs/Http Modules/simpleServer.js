let http = require("http");

let server = http.createServer((request,response)=> {
        // response.write("Hi<br/>")
        // response.write("How r you<br/>")
        // response.write("I Am fine")
        //response.writeHead("text/html");
        response.setHeader("content-type","text/html");
        response.end("<p>Hi <br/> Hell <br/> How r you<br/></p>");
        //response.end("<h1>Welcome to Simple Node JS Server Application</h1>");
       // response.end("<h1>Welcome <br/>to Node Js </h1>")
})

server.listen(9999);
console.log("Server is running on number 9999");

// 1 to 65535