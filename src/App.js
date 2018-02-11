import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
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
        <CatList/>
      </div>
    );
  }
}



export default App
