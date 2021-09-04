let jwt = require("jsonwebtoken");

let verifyUserToken = (req,res,next)=> {
    let token = req.headers.authorization;// header property 
    if(!token){
        return res.status(401).send("Access Denied/Anauthrorized user")
    }else {
        try{
        let verifyUser = jwt.verify(token,"secretKey");
        if(!verifyUser){
            return res.status(401).send("Access Denied");
        }else{
            req.user = verifyUser;  // verification done
            next();     // move to API.  
        }
    }catch(exp){
        res.status(400).send("Invalid token")
    }
    }
}

let IsUser  = async (req,res,next)=> {
    if(req.user.user_type=="user"){
        next();
    }else {
        return res.status(401).send("Unauthorized")
    }
}

let IsAdmin = async (req,res,next)=> {
    if(req.user.user_type=="admin"){
        next();
    }else {
        return res.status(401).send("Unauthorized")
    }
}

module.exports={verifyUserToken,IsAdmin,IsUser}