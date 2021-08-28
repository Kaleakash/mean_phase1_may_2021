// first load the express module 
let express = require("express");

// Create the reference of express modue 
let app = express();

// now load the express-ws module and create the 
// reference with the help of express app. 
let ws = require("express-ws")(app);

//  http://localhost:9090
app.get("/",(req,res)=> {
    // __dirname is a pre-defined property which 
    // provide current directory folder path
    res.sendFile(__dirname+"\\index.html");
})
// This function get call if any web application send the request 
// using WebSocket reference. 
app.ws("/",(socket,req)=> {
    console.log("Client connected....");
    // This function is use to receive the message from web socket cliet application.
    socket.on("message",(msg)=> {
        console.log(msg.toString())
        socket.send(msg.toString());
    })
    // This code server send the message to client
    socket.send("Welcome Sir /Madam , May i help you");
});


app.listen(9090,()=>console.log("Server running on port number 9090"));
