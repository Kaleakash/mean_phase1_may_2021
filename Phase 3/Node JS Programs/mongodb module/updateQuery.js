let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("mydb");
        // update property using _id primary key properites 
        // db.collection("Employees").updateOne({_id:1},{$set:{deptId:10}},(err,doc)=> {
        //         if(!err){
        //                 //console.log(doc)
        //                 if(doc.matchedCount>0){
        //                         console.log("Record updated successfully")
        //                 }else {
        //                         console.log("Record didn't update")
        //                 }
        //         }else {
        //             console.log(error)
        //         }
        //         client.close();
        // })

        // update property using non primary key property 
        db.collection("Employees").updateMany({city:'Bangalore'},{$set:{salary:45000}},(err,doc)=> {
            if(!err){
                    console.log(doc)
                    if(doc.matchedCount>0){
                            console.log("Record updated successfully")
                    }else {
                            console.log("Record didn't update")
                    }
            }else {
                console.log(error)
            }
            client.close();
    })
    }else {
        console.log(err);
    }    
})