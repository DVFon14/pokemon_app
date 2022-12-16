import React, { Component } from 'react'

 class Show extends Component {
  render() {
    const pokemon = this.props.pokemon
    console.log(this.props.pokemon)
    return (
      <div>
        <nav>
          <a href='/pokemon'>Back to Pokedex</a> <br/>
          <a href = {`/pokemon/${pokemon.id}/edit`}> Edit {pokemon.name}</a>
          </nav>
        <h1>{pokemon.name}</h1>
        <img src={`${pokemon.img}.jpg`} alt ={`${pokemon.name}'s Picture`}/> <br/>
      <a href='/pokemon'>Home Page</a>
      </div>
    )
  }
}

export default Show

