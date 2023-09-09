const mongoose = require("mongoose");
const { Schema } = mongoose;

const signUpSchema = new Schema({
    userName: String,
    firstName: String, 
    lastName: String, 
    password: String,
});

const signUpModel = mongoose.model('signUp', signUpSchema);

module.exports = signUpModel; 