const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const NewsFetch = require('./news');

const app = express();
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


const signUp = require("./models/signup");

app.get('/technology-news', async (req, res) => {
  const url = `https://newsapi.org/v2/everything?q="javascript"&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await axios.get(url);
    const articles = response.data.articles;
    res.json(articles);
  } catch (error) {
    console.error('Error fetching technology news:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/signUp", async (req, res) => {
  const { userName, firstName, lastName, password } = req.body;
  const newSignUp = await signUp.create({ userName, firstName, lastName, password });
  res.send(newSignUp);
});

app.get("/signUp", async (req, res) => {
  const signUp = await signUp.find({});
  res.send(signUp);
});

app.delete("/signUp/:id", async (req, res) => {
  await signUp.findByIdAndDelete(req.params.id);
  res.send('Success!');
});

app.put("/signUp/:id", async (req, res) => {
  const { userName, firstName, lastName, password } = req.body;
  const updatedSignUp = await signUp.findByIdAndUpdate(req.params.id, { userName, firstName, lastName, password }, { new: true, overwrite: true });
  res.send(updatedSignUp);
});
















app.get('/', (req, res) => {
     res.send('Welcome to SoGit');
});

app.listen(PORT, () => {
     console.log(`${PORT}`);
   });