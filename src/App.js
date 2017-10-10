import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions.js'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import CatList from './CatList'

export class App extends Component {

componentDidMount() {
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
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch){
  bindActionCreators({fetchCats: fetchCats}, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
