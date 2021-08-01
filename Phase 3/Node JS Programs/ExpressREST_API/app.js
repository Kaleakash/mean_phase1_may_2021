let express = require("express");
let bodyParser = require("body-parser");

let app = express();
//Middleware 
// this property is use to eanble post data receieve from form
//app.use(bodyParser.urlencoded({extended:true}))
//Enable json data from request body part 
app.use(bodyParser.json())  
let emp = {id:100,name:"Rajesh",age:21};        // literal style object creation 
let employees = [
    {id:1,name:"Raj",age:23},
    {id:2,name:"Ravi",age:21},
    {id:3,name:"Ramesh",age:24},
    {id:4,name:"Rajesh",age:25},
    {id:5,name:"Ram",age:27},
]

//Get Method - Produce Text Message 
app.get("/sayHello",(req,res)=> {
    res.send("Welcome to RESTfull Web Service");
});
//Get method  - Produce the JSON Message 
app.get("/sayJson",(req,res)=> {
    res.json({"msg":"Welcome to REST API with JSON Message"});
})
//Get Method - Produce Employee records in json format. 
app.get("/emp",(req,res)=> {
    res.json(emp);
})
// Get method - Product Employees array record in json format. 
app.get("/employees",(req,res)=> {
    res.json(employees);
})

// Get method  - single query param 

//http://localhost:9090/queryParamSingleValue?name=Raj
app.get("/queryParamSingleValue",(req,res)=> {
        let name = req.query["name"]
        res.send("Welcome user "+name);
});

//Get Method = multiple query param 
//http://localhost:9090/queryParamMultipleValue?name=Raj&salary=25000
app.get("/queryParamMultipleValue",(req,res)=> {
    let name = req.query["name"];
    let salary = req.query["salary"];
    salary = eval(salary)+5000;
    res.send("Your Name is "+name+" Your Gross Salary "+salary);
})

//Get method with single Path param 
//http://localhost:9090/singlePath/Ram
app.get("/singlePath/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user "+name);
});

//Post Method 
// http://localhost:9090/postMethod 
app.post("/postMethod",(req,res)=> {
    res.send("Welcome to Post method");
})

//Post method 
// http://localhost:9090/empStore 
app.post("/empStore",(req,res)=> {
    let emp = req.body;
    console.log(emp);
    res.send("Employee record store");
});

// put method 
// http://localhost:9090/empUpdate 

app.put("/empUpdate",(req,res)=> {
    let emp = req.body;
    emp.salary = emp.salary+2000;
    res.json(emp);
})

// delete method 
// http://localhost:9090/deleteEmpRec/100

app.delete("/deleteEmpRec/:id",(req,res)=> {
    let id = req.params.id;
    res.send("REcord deleted successfully using id as "+id);
});

app.listen(9090,()=>console.log("Server running on port number 9090"));




