const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const getTechnologyNews = require("./controllers/news");
const emptyDatabase = require("./deleteScript");

require("dotenv").config();
const PORT = process.env.PORT;
const KEY = process.env.NEWS_API_KEY;

const newsModel = require("./models/newsModel");

const app = express();

app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_URL);

app.get("/technology-news", getTechnologyNews);

class Article {
  constructor(title, author, description, content) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.content = content;
    this.likes = false;
    this.comments = [];
  }
}

app.get("/news", async (req, res) => {
  try {
    const articles = await newsModel.find({});
    if (articles.length > 0) {
      const currentDate = new Date();
      const threeDaysAgo = new Date(currentDate - 3 * 24 * 60 * 60 * 1000);

      if (articles.length > 0 && articles[0].createdAt < threeDaysAgo) {
        deleteScript();
      } else {
        res.status(200).send(articles);
        return;
      }
    }
  } catch (error) {}
  console.log("Call API");
  try {
    const url = `https://newsapi.org/v2/everything?q="javascript"&apiKey=${KEY}`;
    const response = await axios.get(url);
    const articles = response.data.articles;

    const filterArticles = articles.filter((article) =>
      article.title.toLowerCase().includes("javascript")
    );
    for (let i = 0; i < filterArticles.length; i++) {
      const article = new Article(
        filterArticles[i].title,
        filterArticles[i].author,
        filterArticles[i].description,
        filterArticles[i].content
      );
      await newsModel.create(article);
    }
    const allArticles = await newsModel.find({});
    res.send(allArticles);
  } catch (error) {
    console.error("Error fetching technology news:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.patch("/likes/:id", async (req, res) => {
  try{
    const id = req.params.id;
    console.log(req.params)
    const updatedLikes = req.body.likes;
    console.log(updatedLikes);
await newsModel.findByIdAndUpdate(id, {likes: updatedLikes});
res.status(202).send("Updated");
} catch (error){
  console.error(error);
  res.status(500).send("Error");
}
});

app.patch("/comments/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //TODO getonebyid
    const comment = await newsModel.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" }); //?
    }
    //TODO extract comments to variables
    console.log(req.body);
    const newComments = req.body.newComments; //?
    //TODO push new comments
    console.log(newComments);
    const updated = await newsModel.findByIdAndUpdate(
      id,
      { $push: { comments: newComments } },
      { new: true }
    );
    res.status(202).send(updated);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding comment");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to SoGit");
});

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
