import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'

import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    debugger
    // this.props.fetchCats()
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
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
}

export const WrapperApp = connect(mapStateToProps, {fetchCats})(App);
