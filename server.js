require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4321;

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/dburl", (request, response) => {
  response.send('My connection string is: mongo');
});

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`); //completely optional
});
