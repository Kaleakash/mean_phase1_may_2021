const productModel = require("../model/productModel");


let storeProduct =  async(req,res)=> {
    let product = req.body;     // retrieve all data from body 
    productModel.insertMany(product,(err,result)=> {
        if(!err){
                res.send("Record stored successfully");
        }else {
                res.send(err);
        }
    })
}

let retreiveProduct = async (req,res)=> {
    productModel.find({},(err,doc)=> {
        if(!err){
            res.send(doc);
        }
    })
}

module.exports = {storeProduct,retreiveProduct}