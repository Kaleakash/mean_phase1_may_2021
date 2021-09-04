let mongoose = require("mongoose");
mongoose.pluralize(null);   // avoid s post fix and lower case for collection 
let productSchema = mongoose.Schema({
    _id: Number,
    pname:String,
    price:Number
});
let productModel = mongoose.model("Product",productSchema);

module.exports=productModel;

