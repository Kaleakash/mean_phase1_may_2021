let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let client = net.createConnection(9000,"127.0.0.1",()=> {
    console.log("Client send the request to server");

    // Sending the message from client to Server
    client.write("Hello Server! I am Client Application");

});
// This function get call if server application send the message to client. 
client.on("data",(msg)=> {
    console.log(msg.toString());
})
// this function call again and again after hit enter key and ready to 
// receive the value from keyboard and pass the value to server.
r1.on("line",(msg)=> {
    client.write(`From Client : ${msg}`);
})