let express = require("express");
let app = express();

app.use(express.json());            // enable post data from body part 

app.get("/sayHello",(req,res)=> {
    res.send("Welcome to Express js with Docker")
})
app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user "+name);
})

app.post("/checkLogin",(req,res)=> {
    let login = req.body;
    if(login.user=="Raj" && login.pass=="123"){
        res.send("Successfully Login")
    }else {
        res.send("Failure try once again")
    }
})

app.listen(9090,()=>console.log("Server running on port number 9090"))