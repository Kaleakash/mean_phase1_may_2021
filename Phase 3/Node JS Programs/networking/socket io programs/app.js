// load the express module 
let express = require("express");

// creating the reference. 
let app = express();

// load http module and conntect with express module reference. 

let http = require("http").Server(app);

// load socket.io moduel and connect with http module reference. 
let io = require("socket.io")(http);


/*
    code to open login page with texfield then open index.html 
    store the name in one variable. 

*/
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})
// this function call if any client send the request to server. 
io.on("connection",(socket)=> {
        console.log("Client connected...");
        // This code is use to receive the message from client.
        socket.on("chat",(msg)=> {
            console.log(msg);       // these message must be store in database. 
                                    // name, message and date/time.
                                // objectid, username,clientmsg, server reponse, datetime
            let dd = new Date();
            let timeInfo = dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();
            socket.emit("msg","We got you message at "+timeInfo);   // dynamic message from server 
        })
})

// run this application using http module with listen method. 
http.listen(9090,()=>console.log("Server running on port number 9090"));
