let express = require("express");
let router = express.Router();

let userController = require("../controller/userController");

// register the new user
router.post("/register",userController.register);

// login the user 
router.post("/login",userController.login);

module.exports=router;