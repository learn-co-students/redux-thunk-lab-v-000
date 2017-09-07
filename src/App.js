import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import * as actions from './actions/catActions.js'

export class App extends Component {

  componentDidMount(){
    if (this.props.cats.length === 0){
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
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


function mapStateToProps(state){
 return {catPics: state.cats.pictures}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
