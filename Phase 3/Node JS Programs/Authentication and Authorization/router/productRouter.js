let express  = require("express");
let middleware = require("../middleware/auth");
let productController = require("../controller/productController");
let router = express.Router();

// admin user 
router.post("/admin/storeProduct",middleware.verifyUserToken,middleware.IsAdmin,productController.storeProduct);
router.get("/admin/retrieveProduct",middleware.verifyUserToken,middleware.IsAdmin,productController.retreiveProduct)


// user login 
router.get("/user/retrieveProduct",middleware.verifyUserToken,middleware.IsUser,productController.retreiveProduct);

module.exports = router;