const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const getTechnologyNews = require("./controllers/news");

require("dotenv").config();
const PORT = process.env.PORT;
const KEY = process.env.NEWS_API_KEY;

const newsModel = require("./models/signup");

const app = express();

app.use(cors());


mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL);



app.get('/technology-news', getTechnologyNews);

class Article {
constructor(title, author, description, content) {
this.title = title;
this.author = author;
this.description = description;
this.content = content;
this.likes = false;
this.comments = [];
}};

app.get("/news", async (req, res) => {
  try {
    const url = `https://newsapi.org/v2/everything?q="javascript"&apiKey=${KEY}`;
      const response = await axios.get(url);
      const articles = response.data.articles;
  
      const filterArticles = articles.filter(article =>
        article.title.toLowerCase().includes("javascript")
      );
      for(let i = 0; i < filterArticles.length; i++){
      const article = new Article(filterArticles[i].title, filterArticles[i].author, filterArticles[i].description, filterArticles[i].content)
      await newsModel.create(article)
      }
      const allArticles = await newsModel.find({});
      res.send(allArticles);

    } catch (error) {
     console.error('Error fetching technology news:', error);
     res.status(500).send('Internal Server Error'); 

    }
});

app.patch("/likes/:id", async (req, res) => {
  try{
    const id = req.params.id;
    const updatedLikes = req.query.likes;
    console.log(updatedLikes);
await newsModel.findByIdAndUpdate(id, {likes: updatedLikes});
res.status(202).send("Updated");
} catch (error){
  console.error(error);
  res.status(500).send("Error");
}
});

app.patch("/comments:/id", async (req, res) => {

})

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