let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
//mongoose.global = mongoose.Promise; 
let app = express();
let userRouter = require("./router/userRouter");

app.use(express.json());    // enable request body part data. 
app.use(cors());            // enable to call from angular 

let url = "mongodb://localhost:27017/mean";
// db connection 
mongoose.connect(url).
then(res=>console.log("Connected")).
catch(err=>console.log(err));


// main path match 
app.use("/api/login",userRouter);


app.listen(9090,()=>console.log("Server running on port number 9090"));