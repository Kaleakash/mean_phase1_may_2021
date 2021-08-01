let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());     // enable body part json data. 

let customers = [
    {cid:100,cname:"Ravi",age:21,address:{city:"Bangalore",state:"Kar"}},
    {cid:101,cname:"Ramesh",age:24,address:{city:"Pune",state:"Mh"}}
]

//Get all customer details
// http://localhost:9090/allCustomer 
app.get("/allCustomer",(req,res)=> {
    res.json(customers);
})

// find customer details using cid 
// http://localhost:9090/findCustomer/100       : present 
// http://localhost:9090/findCustomer/1         : not present 
app.get("/findCustomer/:cid",(req,res)=> {
    let cid = req.params.cid;
    let customer = customers.find(c=>c.cid==cid);
    if(customer==undefined){
        res.json({"msg":"Customer is not present with id as "+cid})
    }else {
        res.json(customer);
    }
});

// create new customer 
//http://localhost:9090/customerStore
app.post("/customerStore",(req,res)=> {
    let customer = req.body;
    let result = customers.find(c=>c.id==customer.cid);
    if(result==undefined){
            customers.push(customer);
            res.send("Customer record stored successfully!");
    }else {
            res.send("Customer id must be unique!");
    }
})



app.listen(9090,()=>console.log("Server running on port number 9090"));