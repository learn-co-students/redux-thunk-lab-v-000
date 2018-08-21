import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from './actions/catActions.js'
import { bindActionCreators } from 'redux'
import CatList from './CatList'


export class App extends Component {

  componentDidMount() {
    debugger
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



function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, {...actions} )(App)
