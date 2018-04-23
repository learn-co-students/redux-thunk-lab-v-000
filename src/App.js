import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar } from 'react-bootstrap';
import * as actions from './actions/catActions';
import CatList from './CatList';

export class App extends Component {

  componentDidMount() {
    this.props.actions.fetchCats()
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

function mapStateToProps(state) {
  return {cats: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  bindActionCreators(actions, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
