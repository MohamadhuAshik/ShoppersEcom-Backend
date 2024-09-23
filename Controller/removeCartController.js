const mongoose = require("mongoose")
const usersSchema = require("../Model/usersSchema")
const Users = mongoose.model("User", usersSchema)



const removefromcart = async (req, res) => {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
    );
    res.send("Removed");
};

module.exports = removefromcart