let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mydb");
        //var cursor = db.collection("Employees").find();
        var cursor = db.collection("Employees").find({salary:{$gt:25000}});
        cursor.forEach(doc=> {
            if(doc!=null){
            console.log("id is "+doc._id+" Name is "+doc.name+" Age is "+doc.age);
            }
            client.close();
        })
        
    }else {
        console.log(err);
    }    
})