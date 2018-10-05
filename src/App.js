import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catPics: state.cats
})

export default connect(mapStateToProps)(App)
