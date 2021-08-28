let net = require("net");
let server = net.createServer();
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
// if any client send the request to this application
// using ip and port numbet that time only this function get called.

server.on("connection",(socket)=> {
    console.log("Client connected...");

    // This function get call if any client send the data to server 
    // application
    socket.on("data",(msg)=> {
        console.log(msg.toString());
        // mongodb or mongoose to store the data. 
    })
    // This function call again and again after hit enter key 
    // and recieve the message from console and pass to client 
    r1.on("line",(msg)=> {
        socket.write(`From Server : ${msg}`);
    })

    // Server send the message to client appplication
    socket.write("Welcome client to chatting application");
})


server.listen(9000,()=>console.log("Server running on port number 9000"));