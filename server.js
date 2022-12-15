require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
const pokemon = require("./models/pokemon");
const port = 8000;

//===================MIDDLEWARE==================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring
app.use(express.urlencoded({ extended: false }));

//=======Connect to Mongoose and remove deprication warnings=======
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});

//===================ROUTES==================

// app.get("/", (req, res) => {
//   res.send("Welcome to the Pokemon App!");
// });

//INDEX <-----
app.get("/pokemon", (req, res) => {
  //find all pokemn
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", { pokemon: allPokemon });
  });
});

//NEW
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//POST <-----
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, newPokemon) => {
    res.redirect("/pokemon");
  });
});

//DELETE

//UPDATE

//CREATE <-----

//EDIT

//SHOW <-----
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.param.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
