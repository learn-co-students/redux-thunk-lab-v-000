import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

const mapStateToProps = state => {
  return { catPics: state.cats.pictures };
 };

export class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
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
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

export const WrapperApp = connect(mapStateToProps, { fetchCats })(App);
