import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import * as actions from './actions/catActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  CatList from './CatList';

export class App extends Component {
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.actions.fetchCats();
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

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return { catPics: state.cats.pictures };
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps )(App);
