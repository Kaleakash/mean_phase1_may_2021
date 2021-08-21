// load all modules 
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let port  = 9090 || process.env.port;
let url = "mongodb://localhost:27017/mean"
let employeeRouter = require("./router/employee.router");

// creting the reference of express 
let app = express();

// connect the database. 
mongoose.connect(url).then(result=>console.log("Connected")).catch(error=>console.log(error));

// middleware 
app.use(bodyParser.json());     //enable json body data from request. 
app.use(cors());                // enable to access front end technologies 

// path matching and re-direct to router file
// http://localhost:9090/ap/employees 
app.use("/api/employees",employeeRouter);
//app.use("/api/products",productRouter);

//run the application on port number 
app.listen(port,()=>console.log(`Server running on port number ${port}`));



















