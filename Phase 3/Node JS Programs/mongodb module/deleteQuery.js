let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mydb");
        // delete one record using _id property 
        db.collection("Employees").deleteOne({_id:11},(err,doc)=> {
            if(!err){
                if(doc.deletedCount>0){
                    console.log("Record deleted successfully");
                }else {
                    console.log("Record not present")
                }
            }else {
                console.log(err);
            }
            client.close();
        })    
    
    }else {
        console.log(err);
    }    
})