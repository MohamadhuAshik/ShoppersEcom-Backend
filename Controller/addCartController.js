const mongoose = require("mongoose")
const usersSchema = require("../Model/usersSchema")
const Users = mongoose.model("User",usersSchema)

const addtocart = async (req, res) => {
    console.log("Added", req.body.itemId);
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Added");
  }

  module.exports = addtocart