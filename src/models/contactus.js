const mongoose = require("mongoose");


var contactSchema = new mongoose.Schema({
    name : String,
    email: String,
    phone: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;