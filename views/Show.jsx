

import React, { Component } from 'react'

 class Show extends Component {
  render() {
    const pokemon = this.props. pokemon
    console.log(this.props.pokemon)
    return (
      <div>
        <nav>
          <a href='/pokemon'> Pokedex</a>
        </nav>
        <h1>{pokemon.name}</h1>
        <img src={`${pokemon.img}.jpg`} alt ={`${pokemon.name}'s Picture`}/>
        <a href='/pokemon'>Home Page</a>
        <a href='/pokemon'>Pokedex</a>
      </div>
    )
  }
}

export default Show



// const React = require('react')

// class Show extends React.Component {
//   render() {
//     const pokemon = this.props. pokemon
//     console.log(this.props.pokemon)
//     return (
//       <div>
//         <h1>Gotta Catch 'Em All</h1>
//         <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
//         <img src={`${pokemon.img}.jpg`} alt ={`${pokemon.name}'s Picture`}/>
//             <a href = "/pokemon">Home Page</a>
//             {pokem.readyToPlay? ' It is ready to fight.': ' It is not ready to fight...give it a little more rest.'}

//       </div>
//     )
//   }
// }

// module.exports  = Show;