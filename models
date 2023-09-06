const mongoose = require("mongoose");
const { Schema } = mongoose;

const signUpSchema = new Schema({
    userName: String,
    firstName: String, 
    lastName: String, 
    password: String,
});

const signUp = mongoose.model('signUp', signUpSchema);

module.exports = signUp; 