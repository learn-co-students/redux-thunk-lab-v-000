import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './actions/catActions.js';
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
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

const mapsPropsToState = (state) => {
  return { catPics: state.cats.pictures }
}

export default connect(mapsPropsToState, { ...actions })(App)

