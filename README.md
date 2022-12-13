# pokemon_app

<ul>
            {pokemons.map((pokemon, i) => {
                return (
                    <li key = {i}>
                        <a href = {`/pokemon/${i}`}>
                            {pokemon.name}
                        </a>
                        
                    </li>
                )
            })}

app.get('/pokemon/:indexOfPokemonArray', (req,res) => {
res.render("Show",{pokemons: pokemon[req.params.indexOfPokemonArray]});
});

<img src={`${pokemons.img}.jpg`} />
