const axios = require('axios');
require('dotenv').config()
const NEWS_API_KEY = process.env.NEWS_API_KEY;

class News{
  constructor(title, description, content) {
    this.title = title;
    this.description= description;
    this.content = content;
  }
}

const getTechnologyNews = async (req, res) => {
     
   const url = `https://newsapi.org/v2/everything?q="javascript"&apiKey=${NEWS_API_KEY}`;
    
    try {
      const response = await axios.get(url);
      res.send(response.data.articles)
      //TODO javascript search title only
    } catch (error) {
     console.error('Error fetching technology news:', error);
     res.status(500).send('Internal Server Error'); 

    }
  }


module.exports = getTechnologyNews;
