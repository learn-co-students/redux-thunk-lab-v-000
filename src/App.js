import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {

  constructor() {
    super();
    this.state = {catPics: []};
  }

  componentDidMount() {
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
        <CatList catPics={this.state.catPics}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {catPics: state.pictures};
}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
