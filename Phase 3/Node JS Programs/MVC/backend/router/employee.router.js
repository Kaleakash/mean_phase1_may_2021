// load the controller file 
let employeeController = require("../controller/employee.controller");
let express = require("express");
let router = express.Router();  // This reference help to check path and http method 
                                // base upon th path navigate to controller methods.
                                
router.post("/employeeStore",employeeController.storeEmloyeeDetails);



module.exports=router;