//this is a functional component 

import pokemon from "../models/pokemon";

const React = require("react");

const myStyle = {
    color: '#ffffff',
   // backgroundColor: '#000000',
  };


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