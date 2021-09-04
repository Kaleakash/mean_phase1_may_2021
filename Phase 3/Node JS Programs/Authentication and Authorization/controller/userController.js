let User = require("../model/userModel");
let bcrypt = require("bcryptjs");       // password 
let jwt = require("jsonwebtoken")           // to generate token 

let register = async (req,res)=> {

    let salt = await bcrypt.genSalt(10);
                                        //12345 , g5eafafsafsafsaf
    let hasPasword = await bcrypt.hash(req.body.password,salt); 
    console.log(hasPasword);

    let user = new User({
        email: req.body.email,
        name:req.body.name,
        password:hasPasword,
        user_type:req.body.user_type
    });
    //User.insertMany()
    user.save((err,doc)=> {
        if(!err){
            //res.send("Account Created successfully");
            let payload = {id:doc._id,user_type:req.body.user_type}
            let token = jwt.sign(payload,"secretKey");
           // res.status(200).header("auth-token",token).send("Account Created successfully");
           res.status(200).send({token});
        }else {
            res.send(err);
        }
    })
}

// emailid and password 
let login = async (req,res)=> {
      User.findOne({email:req.body.email},async (err,user)=> {
          if(!err){
                if(user){
                    let validPassword = await bcrypt.compare(req.body.password,user.password);
                    if(!validPassword){
                        return res.status(401).send("Invalid Password");
                    }else {
                    let payload = {id:user._id,user_type:req.body.user_type}
                    let token = jwt.sign(payload,"secretKey");
                    // res.status(200).header("auth-token",token).send("Account Created successfully");
                    res.status(200).send({token});
                    }
                }
          }else {
              res.status(404).send(err);
          }
      })  
}


module.exports= {register,login}