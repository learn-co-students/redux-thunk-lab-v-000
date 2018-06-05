import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from "react-redux";
import * as actions from './actions/catActions';
import { bindActionCreators } from 'redux';
import CatList from './CatList';

export class App extends Component {

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('I fetched the catz')
      this.props.actions.fetchCats()
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
        <CatList catPics={this.props.catPics}></CatList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
