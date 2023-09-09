const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const getTechnologyNews = require("./controllers/news");

require("dotenv").config();
const PORT = process.env.PORT;

const signUp = require("./models/signup");

const app = express();

app.use(cors());


mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);



app.get('/technology-news', getTechnologyNews);


app.post("/signUp", async (req, res) => {
  const { userName, firstName, lastName, password } = req.body;
  const newSignUp = await signUp.create({ userName, firstName, lastName, password });
  res.send(newSignUp);
});


















app.get('/', (req, res) => {
     res.send('Welcome to SoGit');
});

app.listen(PORT, () => {
     console.log(`${PORT}`);
   });