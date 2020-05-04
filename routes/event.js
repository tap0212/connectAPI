const express = require("express")
const router = express.Router(); 


const {createProduct,getAllProducts} = require("../controllers/event")
const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/authentication")



router.post("/product/create/:userId",isSignedIn,isAuthenticated,isAdmin, createProduct)
router.get("/products",getAllProducts)
module.exports = router;