let fs = require("fs");
fs.readFile("customer.json",(err,data)=> {
    if(!err){
        // convert buffer to string 
        var result = data.toString();
        console.log(result);
        var customer = JSON.parse(result)
        //console.log(result.cid)
        console.log("Customer id is "+customer.cid);
        console.log("customer name is "+customer.cname);
        console.log("Customer age is "+customer.age);
    }
})