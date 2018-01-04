import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList'
import fetchCats from './actions/catActions'

const mapStateToProps = state => {
  // console.log(state); // {cats: {loading: false, pictures: Array(0)}}
  return { catPics: state.cats.pictures }; // catPics: []
 };

class App extends Component {
  componentDidMount() {
    // fetch the cats
    this.props.fetchCats();
  }

  render() {
    // debugger
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

export const WrapperApp = connect(mapStateToProps, { fetchCats })(App);
