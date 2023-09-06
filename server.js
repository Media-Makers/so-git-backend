const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

app.listen(PORT, () => {
     console.log(`${PORT}`);
   });