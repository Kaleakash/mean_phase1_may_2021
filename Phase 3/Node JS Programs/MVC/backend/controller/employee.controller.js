let employeeModel = require("../model/employee.model");

let storeEmloyeeDetails = (req,res)=> {
    let employee = req.body;
    console.log(employee);
    employeeModel.insertMany(employee,(err)=> {
        if(!err){
            res.send("Record stored successfully")
        }else {
            res.send(err);
        }
    })
}


module.exports={storeEmloyeeDetails}