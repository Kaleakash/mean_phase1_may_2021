let express = require("express");
let bodyParser = require("body-parser");
let cors  = require("cors");

let app = express();

app.use(bodyParser.json());     // enable body part json data. 
app.use(cors());                // enable Cors features. 

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
    // http://localhost:9090/customerStore
// {"cid":100,"cname":"Ravi","age":21,"address":{"city":"Bangalore","state":"Kar"}}
// {"cid":102,"cname":"Ajay","age":24,"address":{"city":"Mumbai","state":"Kar"}}
app.post("/customerStore",(req,res)=> {
    let customer = req.body;
    let result = customers.find(c=>c.cid==customer.cid);
    if(result==undefined){
            customers.push(customer);
            res.send("Customer record stored successfully!");
    }else {
            res.send("Customer id must be unique!");
    }
})

// update customer age, city and state 
// http://localhost:9090/updateCustomer 
// {"cid":100,"age":24,"address":{"city":"Hubali","state":"Kar"}}
app.put("/updateCustomer",(req,res)=> {
    let customer = req.body;
    let index = customers.findIndex(c=>c.cid==customer.cid);
    if(index<0){
            res.send("Customer is not present!");
    }else {
          customers[index].age = customer.age;
          customers[index].address.city = customer.address.city;
          customers[index].address.state = customer.address.state;
          //  customers.splice(index,1,customer);
          res.send("Customer record updated successfully");          
    }
});

// delete customer record using cid 

// http://localhost:9090/deleteCustomerById/100     : present 
// http://localhost:9090/deleteCustomerById/1       : not present 

app.delete("/deleteCustomerById/:cid",(req,res)=> {
        let cid = req.params.cid;
        let index = customers.findIndex(c=>c.cid==cid);
        if(index<0){
                res.send("Customer information not present with id as "+cid);
        }else {
                customers.splice(index,1);  // index and number of records 
                res.send("Record deleted successfully");
        }
})

app.listen(9090,()=>console.log("Server running on port number 9090"));