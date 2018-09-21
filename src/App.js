import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from "react-redux";
import CatList from './CatList';
import * as actions from "./actions/catActions";

class App extends Component {   
  componentDidMount() {
    // start the fetch
    this.props.fetchCats();
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.pictures}></CatList>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}



export default connect(
  state => state.cats,
  actions
)(App);

