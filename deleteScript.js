const mongoose = require('mongoose');
require("dotenv").config();
const newsModel = require('./models/newsModel'); // Assuming this is the correct path to your model

mongoose.connect(process.env.DATABASE_URL);

async function emptyDatabase() {
  try {
    await newsModel.deleteMany({});
    console.log('Database emptied successfully.');
  } catch (error) {
    console.error('Error emptying database:', error);
  } finally {
    mongoose.disconnect();
  }
}

module.exports = emptyDatabase;

