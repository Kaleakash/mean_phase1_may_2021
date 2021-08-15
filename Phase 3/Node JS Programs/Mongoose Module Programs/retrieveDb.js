let obj = require("mongoose");
let url = "mongodb://localhost:27017/mydb";
const mongoDbOptions={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongoDbOptions)
var db = obj.connection;        
db.once("open",()=> {
    // defined the schema 
    let customerSchema = obj.Schema({
        _id:Number,
        name:String,
        age:Number
    });
    // model create using schema
    let customerModel = obj.model("",customerSchema,"Customer");
    // reteive query 
    customerModel.find({},(err,doc)=> {
        if(!err){
            doc.forEach(cust=> {
                console.log(cust)
            })
        }else {
            
                console.log(err)
            
        }
        obj.disconnect();
    })
   

});



