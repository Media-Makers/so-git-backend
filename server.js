const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
     res.send('Welcome to SoGit');
});

app.listen(PORT, () => {
     console.log(`${PORT}`);
   });