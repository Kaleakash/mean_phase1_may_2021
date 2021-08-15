// load the module and create the reference 
let obj = require("mongodb").MongoClient;

let url ="mongodb://localhost:27017";

obj.connect(url,(err,client)=> {
    if(!err){
        
        let db = client.db("mydb");
        console.log("connected successfully...")

    }else {
        console.log(err)
    }
    client.close();
})
