const axios = require('axios');

class NewsFetch {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getTechnologyNews() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin+technology&apiKey=${this.apiKey}`;
    
    try {
      const response = await axios.get(url);
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching technology news:', error);
      return [];
    }
  }
}

module.exports = NewsFetch;
