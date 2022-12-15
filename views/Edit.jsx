import React, { Component } from "react";

class Edit extends Component {
  render() {
    const { pokemon } = this.pokemon;
    console.log(pokemon);
    return (
      <div>
        <nav>
          <a href='/pokemon'> Changed my mind</a>
        </nav>
        <h1>Edit Pokemon</h1>
        <form
          action={`/pokemon/${this.props.fruit.id}?_method=PUT`}
          method='POST'
        >
          Name: <input type='text' name='name' defaultValue={fruit.name} />{" "}
          <br />
          Color: <input
            type='text'
            name='img'
            defaultValue={pokemon.color}
          />{" "}
          
          <input type='submit' value='submit changes' />
        </form>
      </div>
    );
  }
}

export default Edit;



