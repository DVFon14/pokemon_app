import React, { Component } from 'react'

class Edit extends Component {
  render() {
    console.log(this.props.pokemon)
    const { pokemon } = this.props
    return (
      <div>
        <form action ={`/pokemon/${pokemon._id}?_method=PUT`} method ='POST'>
            <h1>Edit {pokemon.name}</h1>
            Name: <input type='text' name = 'name' defaultValue={pokemon.name}/>
            Image: <input type= 'text' name ="img" defaultValue={pokemon.img}/> <br/>
            <input type='submit' value='submit changes' />
        </form>
        <a href={`/pokemon/${pokemon._id}`}> Changed my mind</a>
      </div>
    )
  }
}

export default Edit


// import React, { Component } from "react";

// class Edit extends Component {
//   render() {
//     const { pokemon } = this.pokemon;
//     console.log(pokemon);
//     return (
//       <div>
//         <nav>
//           <a href='/pokemon'> Changed my mind</a>
//         </nav>
//         <h1>Edit Pokemon</h1>
//         <form
//           action={`/pokemon/${this.props.fruit.id}?_method=PUT`}
//           method='POST'
//         >
//           Name: <input type='text' name='name' defaultValue={fruit.name} />{" "}
//           <br />
//           Color: <input
//             type='text'
//             name='img'
//             defaultValue={pokemon.color}
//           />{" "}
          
//           <input type='submit' value='submit changes' />
//         </form>
//       </div>
//     );
//   }
// }

// export default Edit;



