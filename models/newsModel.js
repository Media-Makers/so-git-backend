const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
 title: String,
 author: String,
 description: String,
 content: String,
 comments: [String],
 likes: Boolean, //? or number for how many likes
},{timestamps:true});

const newsModel = mongoose.model('newsModel', newsSchema);

module.exports = newsModel; 