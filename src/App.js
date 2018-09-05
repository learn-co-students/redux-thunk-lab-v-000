import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList.js';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
      );
  }
  componentDidMount = () => {
    this.props.fetchCats();
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
}

export default connect(mapStateToProps, {...actions} )(App);

