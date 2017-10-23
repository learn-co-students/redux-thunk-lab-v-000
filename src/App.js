import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

import { CatList } from './CatList.js';

class App extends Component {   
  
  render() {
    return (
      <div className="App">

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList />
      </div>
    );
  }
}


// // const mapStateToProps = (state, ownProps) => {
// //   return {
// //     cats: state.pets
// //   };
// // }





// const mapStateToProps = (state, ownProps) => {
//   const pet = state.pets.find(pet => pet.id == ownProps.match.params.petId)

//   if (pet) {
//     return { pet }
//   } else {
//     return {pet: {} }
//   }
// }


export default App; //connect(mapStateToProps)(App);

