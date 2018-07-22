import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import CatList from './CatList.js';
import { connect } from 'react-redux';
import fetchCats from './actions/catActions'

import { bindActionCreators } from 'redux';

export class App extends Component {   
  componentDidMount() {
    this.props.actions.fetchCats();
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

const mapStateToProps = (state) => { 
  return { cats: state.cats };
};


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch);
};

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

