// load the express module 
let express = require("express");
let bodyParser = require("body-parser");

// We have to create the reference of express module 
let app = express();

// middleware : before request reach to specific method. 
app.use(bodyParser.urlencoded({extended:true}));    // enable form post data.

//Get default path 
app.get("/",(req,res)=> {
   // res.send("Welcome to Express JS Module")
   res.sendFile(__dirname+"/index.html");
})

// open the login page 
app.get("/loginGet",(req,res)=> {
    res.sendFile(__dirname+"/loginGet.html");  
})
// check username and password using get method 
app.get("/checkUser",(req,res)=> {
    // let user = req.query.user;
    // let pass = req.query.pass;
    let user = req.query["user"];
    let pass = req.query["pass"]
    if(user=="Raj" && pass=="123"){
        res.send("Successfully Login");
    }else {
        res.send("Failure try once again");
    }
})
// open the login page with post method 
app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"/loginPost.html");  
})
// check username and password using post method 
app.post("/checkUser",(req,res)=> {
        let login = req.body;
        let user = login.user;
        let pass = login.pass;
        if(user=="Ravi" && pass=="123"){
            //res.send("Successfully Login!");
            res.sendFile(__dirname+"/home.html");
        }else {
            res.send("Failure try once again!");
        }
});

app.listen(9090,()=>console.log("Server running on port number 9090"));