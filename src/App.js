import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions.js'

class App extends Component {
  componentDidMount() {
    if (this.props.cats.length === 0) {
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
        <CatList catPics={this.props.cats} />

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { cats: state.cats.pictures };
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
