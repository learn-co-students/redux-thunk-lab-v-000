import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {fetchCats} from './actions/catActions';

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
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats
  }, dispatch);
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
