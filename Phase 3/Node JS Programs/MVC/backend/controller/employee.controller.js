// load the model file 
let employeeModel = require("../model/employee.model");

let storeEmloyeeDetails = (req,res)=> {
    let employee = req.body;            // receive data from request body 
    employeeModel.insertMany(employee,(err)=> {
        if(!err){
            //res.send("Record stored successfully")
            res.json({"msg":"Record stored successfully"})
        }else {
            //console.log(err);
            //res.send(err.writeErrors[0].errmsg);
            res.json({"msg":err.writeErrors[0].errmsg});
        }
    })
}


module.exports={storeEmloyeeDetails}