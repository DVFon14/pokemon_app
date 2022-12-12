const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.send({ pokemon });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
