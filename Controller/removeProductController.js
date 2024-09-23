const mongoose = require("mongoose")
const ProductSchema = require("../Model/productSchema")
const Product = mongoose.model("Product", ProductSchema)

const removeProduct = async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name,
    });
}
module.exports = removeProduct