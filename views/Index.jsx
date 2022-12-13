//this is a functional component 

import pokemon from "../models/pokemon";

const React = require("react");

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

  
// export default class Index extends React.Component() {
//   render() {
    
//     const pokemon = this.props.pokemon
//     return (
//       <div>
//         <h1 style={myStyle}>All Pokemon!</h1>;
//         {pokemon.map((pokemon, id)=>{ //map is an array method. This pokemon is the individul pokemon, id because we're using the array index as the id
//             return(
//             <div>
//                 <a href={`/pokemon/${id}`}>
//                     <li>{pokemon.name}</li>                    
//                 </a>
//             </div>
//             );
//         })}
//         <a href = '/:id'></a>
//       </div>
//     )
//   }
// }

const Index = ({pokemon}) => {
    return (
      <div style={myStyle}>
           {pokemon.map((pokemon, i)=>{ 
              return(
              <div>
              <a href={`pokemon/${i}`}>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</a>
              </div>
              )
           })}
   
      </div>
    )
  }


export default Index