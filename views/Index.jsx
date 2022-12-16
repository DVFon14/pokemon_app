import React, { Component } from 'react'

 class Index extends Component {
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
          <div>
            <li>
            <a href={`pokemon/${p.id}`}>{p.name}</a>
            <form action ={`/pokemon/${p.id}?_method=DELETE`} method ='POST'>
              <input type ='submit' value ='DELETE'/>
            </form>
            </li>
          </div>

        )
      })}
      <a href=''></a>
    </body>
  </html>
)
}}

export default Index
