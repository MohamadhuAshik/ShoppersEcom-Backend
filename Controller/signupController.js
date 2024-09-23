const mongoose = require("mongoose");
const UserSchema = require("../Model/usersSchema");
const Users = mongoose.model("Users",UserSchema)

const signup = async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({
            success: false,
            errors: "Existing user Found with same Email Address",
        });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });
    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    };

    const token = jwt.sign(data, "secret_ecom");
    res.json({ success: true, token });
};

module.exports = signup