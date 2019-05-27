import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">CatBook</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </div>

        <CatList />
      </div>
    );
  }
}

// const mapStateToProps =

export default App;
