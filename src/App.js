import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import fetchCats from './actions/catActions';
import CatList from './CatList';


export class App extends Component {   
  
  componentDidMount() {
    fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPic: state.catPic
  };
}


export const WrapperApp = connect(mapStateToProps, { fetchCats })(App);


