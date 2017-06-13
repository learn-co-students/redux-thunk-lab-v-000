import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/catActions';
import CatList from './CatList'
import {Navbar} from 'react-bootstrap'

export class App extends Component {
  componentDidMount() {
    if (this.props.catPics.length === 0) {
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
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function matchDispatchtoProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

function mapStatetoProps(state) {
  return {catPics: state.cats.pictures}
}

export const WrapperApp = connect(mapStatetoProps, matchDispatchtoProps)(App)
