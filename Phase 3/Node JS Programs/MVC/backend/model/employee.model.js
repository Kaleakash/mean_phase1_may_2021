let mongoose = require("mongoose");

//Schema is ready 
let employeeSchema = mongoose.Schema({
    _id:Number,
    name:String,
    salary:Number
});

// Model is ready 1st parameter collection name and 2nd parameter schema
let employeeModel = mongoose.model("Employees",employeeSchema);


module.exports=employeeModel;





