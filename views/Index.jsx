import React, { Component } from 'react'

const myStyle = {
    color: '#ffffff',
  };



export default class Index extends Component {
  render(){
    const pokemon = this.props.pokemon;
    console.log(this.props.pokemon)
    
return(
  <html>
    <body>
      <nav>
        <a href="/pokemon/new">Create a New Pokemon</a>
      </nav>
      <h1>All Pokemon</h1>
      {pokemon.map((p)=>{
        return(
          <a href={`pokemon/${p.id}`}>
            <li>{p.name}</li>
          </a>
        )
      })}
      <a href=''></a>
    </body>
  </html>
)
}}



// const Index = ({pokemon}) => {
//     return (
//       <div style={myStyle}>
//            {pokemon.map((p)=>{ 
//               return(
//               <div>
//               <a href={`pokemon/`}>{p.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</a>
//               </div>
//               )
//            })}
   
//       </div>
//     )
//   }