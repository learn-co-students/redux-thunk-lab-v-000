import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Navbar} from 'react-bootstrap';

import fetchCats from './actions/catActions.js';
import CatList from './CatList';

class App extends Component {   
  componentDidMount(){
    if (this.props.catPics.length === 0) {
      this.props.fetchCats();
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
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchCats, dispatch);
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

