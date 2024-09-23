const express = require("express");
const signup = require("../Controller/signupController");
const addProduct = require("../Controller/addProductController");
const removeProduct = require("../Controller/removeProductController");
const addtocart = require("../Controller/addCartController");
const fetchUser = require("../middlewear/fetchUser");
const removefromcart = require("../Controller/removeCartController");
const upload = require("../multer/imageUploader");
const imageUploader = require("../Controller/imageUploade");
const userLogin = require("../Controller/login");
const getProducts = require("../Controller/getProducts");
const router = express.Router();


router.post("/signup", signup)
router.post("/login", userLogin)
router.post("/addproducts", addProduct)
router.post("/removeproducts", removeProduct)
router.post("/addtocart", fetchUser, addtocart)
router.post("/removefromcart", fetchUser, removefromcart)
router.get("/allproducts", getProducts.allproducts)
router.get("/newcollection", getProducts.newcollection)
router.get("/popularinwomen", getProducts.popularinwomen)
router.post("/getcart", fetchUser, getProducts.getcart)
router.post("/upload", upload.single("product"), imageUploader)

module.exports = router;
