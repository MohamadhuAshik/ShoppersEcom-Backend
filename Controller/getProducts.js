const mongoose = require("mongoose");
const ProductSchema = require("../Model/productSchema");
const Product = mongoose.model("Product", ProductSchema)
const usersSchema = require("../Model/usersSchema")
const Users = mongoose.model("User", usersSchema)


const allproducts = async (req, res) => {
    let products = await Product.find({});
    console.log("all products Fetched");
    res.send(products);
};


const newcollection = async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("newCollection Fetched");
    res.send(newcollection);
};

const popularinwomen = async (req, res) => {
    let products = await Product.find({ category: "women" });
    let popular_in_women = products.slice(0, 4);
    console.log("popular In Women Fetched");
    res.send(popular_in_women);
};

const getcart = async (req, res) => {
    console.log("GetCart");
    let userData = await Users.findOne({ _id: req.user.id })
    res.json(userData.cartData)
}

const getProducts = { popularinwomen, getcart, newcollection, allproducts }

module.exports = getProducts