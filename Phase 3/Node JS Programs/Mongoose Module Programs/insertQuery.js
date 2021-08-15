let obj = require("mongoose");
let url = "mongodb://localhost:27017/mydb";
const mongoDbOptions={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongoDbOptions).
then(result=>console.log("Database connected successfully")).
catch(error=>console.log("error generate "+error));
                                // connected 
var db = obj.connection;        // this is use to get the connection reference. 
db.once("open",()=> {
    // defined the schema 
    let customerSchema = obj.Schema({
        _id:Number,
        name:String,
        age:Number
    });
    // create model base upon the schema : collection name created as lower case 
    // with post fix s.
    //let customerModel = obj.model("Customer",customerSchema);    
    let customerModel = obj.model("",customerSchema,"Customer");
    // now have to create the reference base upon the model 
    let cust1 = new customerModel({_id:2,name:"Ajay",age:25});
    // storing record using instance 
    cust1.save((err,result)=> {
        if(!err){
            console.log(result);
        }
        db.close();
    })
    // storing record using model 
    // customerModel.insertMany(cust1,(err,result)=> {
    //     if(!err){
    //         console.log(result);
    //     }else {
    //         console.log(err);
    //     }
    //     db.close();
    // });
});



