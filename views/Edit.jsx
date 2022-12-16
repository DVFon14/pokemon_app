import React, { Component } from 'react'

class Edit extends Component {
  render() {
    console.log(this.props.pokemon)
    const { pokemon } = this.props
    return (
      <div>
        <form action ={`/pokemon/${pokemon._id}?_method=PUT`} method ='POST'>
            <h1>Edit {pokemon.name}</h1>
            Name: <input type='text' name = 'name' defaultValue={pokemon.name}/><br/>
            Image: <input type= 'text' name ="img" defaultValue={pokemon.img}/> <br/>
            <input type='submit' value='submit changes' />
        </form> 
        <a href={`/pokemon/${pokemon._id}`}> Changed my mind</a>
      </div>
    )
  }
}

export default Edit






