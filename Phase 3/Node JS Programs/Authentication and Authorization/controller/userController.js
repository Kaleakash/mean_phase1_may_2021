let User = require("../model/userModel");
let bcrypt = require("bcryptjs");       // password 
let jwt = require("jsonwebtoken")           // to generate token 

let register = async (req,res)=> {

    let salt = await bcrypt.genSalt(10);
    let hasPasword = await bcrypt.hash(req.body.password,salt); 
    
    let user = new User({
        email: req.body.email,
        name:req.body.name,
        password:hasPasword,
        user_type:req.body.user_type
    });
    user.save((err,doc)=> {
        if(!err){
            res.send("Account Created successfully");
        }
    })
}

module.exports= {register}