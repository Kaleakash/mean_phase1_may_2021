let fs = require("fs");
let emp = {"id":100,"name":"Raj","salary":12000};
// converting object literator or json data into string format.
//let empStringFormat = JSON.stringify(emp);
fs.readFile("employees.json",(err,data)=> {
    if(!err){
        let dataStringFormat = data.toString();
        let employees = JSON.parse(dataStringFormat);
        console.log(employees.length);
        employees.push(emp);
        let empArrayStringFormat = JSON.stringify(employees);
           
        fs.writeFile("employees.json",empArrayStringFormat,(err)=> {
            if(!err){
                console.log("Employee details store in json format");
            }
        })

    }
})
