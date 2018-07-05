import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux';
import {fetchCats} from './actions/catActions';
class App extends Component {

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
        <CatList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats
  };
}
export const WrapperApp = connect(mapStateToProps, { fetchCats })(App);
