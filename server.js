const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");
const port = 3000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring

// const index = require("./views/Index");

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon }); //first argument if file. Second argument is data. Could be pokemon: pokemon of pokemon since the key-value pair are the same
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id], //pokemon: pokemon. The second is getting the index of the pokemon array
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
