let express = require("express");
let app = express();
app.use(express.json());
let customers = [
        {"cid":100,"cname":"Raj","age":21}
]
app.get("/textMsg",(req,res)=> {
    res.send("Welcome to Express Js Application");
})
app.get("/getCustomers",(req,res)=> {
    res.json(customers);
})
app.post("/storeData",(req,res)=> {
    let cust = req.body;
    let customer = customers.find(c=>c.cid==cust.cid);
    if(customer==undefined){
            customers.push(customer);
            res.send("Record stored successfully");
    }else {
            res.send("Cust id must be unique");
    }
})

app.listen(9090,()=>console.log("Server is running"))
module.exports=app;