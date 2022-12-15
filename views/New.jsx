// const React = require('react');

// class New extends React.Component {
//   render() {
//     return (
//         <div>
//             <h1>New Pokemon page</h1>
//             {/* NOTE: action will be the route, method will be the HTTP verb */}
//             <form action="/pokemon" method="POST">
//               Name: <input type="text" name="name" /><br/>
//               Color: <input type="text" name="color" /><br/>
//               Is Ready To Play: <input type="checkbox" name="readyToPlau" /><br/>
//               <input type="submit" name="" value="Create Pokemon"/>
//             </form>
//             <a href="/pokemon">I don't want to create a new pokemon</a>
//         </div>);
//     }
//   }

// // module.exports = New;
// export default New

import React, { Component } from 'react'

 class New extends Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Form</h1>
        <form action= '/pokemon' method ='post'>
            Name: <input type ='text' name='name'/> <br/>
            Image: <input type ='text' name='img'/> <br/>
            <input type ='submit' value = 'create pokemon'/> <br/>
        </form>
     </div>
    )
  }
}

export default New