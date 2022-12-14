require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const pokemon = require("./models/pokemon");
const port = 8000;

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring

//Connect to Mongoose and remove deprication warnings
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//INDEX <-----
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon }); //first argument if file. Second argument is data. Could be pokemon: pokemon of pokemon since the key-value pair are the same
});

//POST <-----
app.post("/pokemon", (req, res) => {
  if (req.body.readyToPlay === "on") {
    req.body.readyToPlay = true;
  } else {
    req.body.readyToPlay = false;
  }
  // Fruit.create(req.body, (error, createdFruit) => {
  //   res.redirect("/pokemon");
  // });
});

//DELETE

//UPDATE

//CREATE <-----

//EDIT

//SHOW <-----
app.get("/pokemon/:id", (req, res) => {
  res.render("Show", {
    pokemon: pokemon[req.params.id], //pokemon: pokemon. The second is getting the index of the pokemon array
  });
});

//POST

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
