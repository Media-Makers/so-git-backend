const axios = require('axios');
require('dotenv').config()
const NEWS_API_KEY = process.env.NEWS_API_KEY;

class News{
  constructor(title, description, author, content, ) {
    this.title = title;
    this.description= description;
    this.author = author;
    this.content = content;
  }
}

const getTechnologyNews = async (req, res) => {
     
   const url = `https://newsapi.org/v2/everything?q="javascript"&apiKey=${NEWS_API_KEY}`;
    
    try {
      const response = await axios.get(url);
      const articles = response.data.articles;
      //TODO javascript search title only
      const filterArticles = articles.filter(article =>
        article.title.toLowerCase().includes("javascript")
      );
      res.send(filterArticles);

    } catch (error) {
     console.error('Error fetching technology news:', error);
     res.status(500).send('Internal Server Error'); 

    }
  }


module.exports = getTechnologyNews;
