import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import CatList from './CatList'

export class App extends Component {

  componentDidMount() {
    // fetch the cats
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

function mapStateToProps(state){
  return {catPics: state.cats.pictures}
}

export const WrapperApp = connect(mapStateToProps)(App)
