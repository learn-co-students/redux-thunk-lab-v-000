import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
import * as actions from './actions/catActions.js'
import { bindActionCreators } from 'redux'

export class App extends Component {
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('COMPONENTDIDMOUNT()')
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

function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
}
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
