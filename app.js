const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const movie = require("./route/movieRoute");
const categry = require("./route/categryRoute");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/movie", movie);
app.use("/api/categry", categry);

app.listen(process.env.PORT);

async function dbconnection() {
  try {
    const res = await mongoose.connect(process.env.CONNECT);
    const data = await res.default;
    console.log(data.STATES.connected);
  } catch (error) {
    console.log(error.message);
  }
}
dbconnection();
