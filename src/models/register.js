const mongoose = require("mongoose");

var employee = new mongoose.Schema({
    name : String,
    email: String,
    phone: String,
    password: String,
    cpassword: String
});

const Register = mongoose.model('Register', employee);

module.exports = Register;