const mongoose = require("mongoose");


let cartSchema = new mongoose.Schema({
    name : String,
    price: String,
    size: String
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
