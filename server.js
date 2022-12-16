require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
//const pokemon = require("./models/pokemon");
const methodOverride = require("method-override");
const port = 8000;

//===================MIDDLEWARE==================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
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

app.get("/pokemon/seed", (req, res) => {
  const pokemonStarterData = [
    { name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur" },
    { name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur" },
    { name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur" },
    { name: "charmander", img: "http://img.pokemondb.net/artwork/charmander" },
    { name: "charizard", img: "http://img.pokemondb.net/artwork/charizard" },
    { name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle" },
    { name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle" },
  ];

  Pokemon.deleteMany({}).then((data) => {
    Pokemon.create(pokemonStarterData).then((data) => {
      console.log(data);
      res.redirect("/pokemon");
    });
  });
});

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

//POST
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, newPokemon) => {
    res.redirect("/pokemon");
  });
});

//UPDATE

//CREATE

//SHOW
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

//PUT- EDIT
app.get("/pokemon/:id/edit", (req, res) => {
  //find pokemon by id //pass in pokemon data
  Pokemon.findById(req.params.id, (err, pokemonData) => {
    //render a form
    res.render("Edit", {
      poken: pokemonData, //give 'edit' access to pokemon data
    });
  });
});

//PUT ROUTE
app.put("/pokemon/:id", (req, res) => {
  //find pokemon by id and update
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) => {
    //redirect to show page
    console.log(updatedPokemon);
    res.redirect(`/pokemon/${req.params.id}`);
  });
});

//DELETE
app.delete("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndRemove(req.params.id, (err, deletedPokemon) => {
    res.redirect("/pokemon");
  });
});

//PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
