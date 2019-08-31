import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'

class App extends Component {   
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.fetchCats()
    }
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
      </div>
    );
  }
}

export default App