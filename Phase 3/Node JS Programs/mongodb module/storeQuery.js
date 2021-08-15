let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mydb");
let emp = {_id:12,name:"Dinesh",age:35,salary:45000,deptId:20,city:"Bangalore"}
        db.collection("Employees").insertOne(emp,(err,doc)=>{
            if(!err){
                console.log(doc)
            }else {
                console.log(err)
            }
            client.close();
        })
        
    }else {
        console.log(err);
    }    
})