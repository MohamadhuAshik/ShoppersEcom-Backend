const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const usersSchema = require("../Model/usersSchema")
const Users = mongoose.model("User",usersSchema)


const userLogin = async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
      const passCompare = req.body.password === user.password;
      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token });
      } else {
        res.json({ success: false, errors: "Wrong Password" });
      }
    } else {
      res.json({ success: false, errors: "Wrong Email-ID" });
    }
  }

  module.exports = userLogin