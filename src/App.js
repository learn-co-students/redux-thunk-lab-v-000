import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from './actions/catActions.js'
import { bindActionCreators } from 'redux'
import CatList from './CatList'

export class App extends Component {   
  constructor(props){
    super(props)
  }

componentDidMount(){
  if (this.props.catPics.length === 0) {
    this.props.fetchCats()
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

function mapStateToProps(state){
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

export const WrapperApp = connect( mapStateToProps, {...actions} )(App)

