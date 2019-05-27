import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux'

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

  componentDidMount(){
    fetch('http://localhost:4000/db')
    .then(response => response.json())
    .then(({cats}) => this.fetchCats(cats))
  }


const mapDispatchToProps = dispatch => ({
  fetchCats: cats => dispatch({type: 'FETCH_CATS', cats})
})

export default connect (null, mapDispatchToProps)(App);
