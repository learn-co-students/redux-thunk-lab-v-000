import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatsContainer from './containers/CatsContainer';


class App extends Component {

  componentDidMount(){

  }
  
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
          <CatsContainer />
      </div>
    );
  }
}



export default App
