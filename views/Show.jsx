import React, { Component } from 'react'

export default class Show extends Component {
  render() {
    const pokemon = this.props. pokemon
    console.log(this.props.pokemon)
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
        <img src={`${pokemon.img}.jpg`} alt ={`${pokemon.name}'s Picture`}/>
            <a href = "/pokemon">Home Page</a>
      </div>
    )
  }
}
