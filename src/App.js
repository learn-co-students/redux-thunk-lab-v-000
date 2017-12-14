import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCats } from './actions/catActions';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList';

export class App extends Component {

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('in component did mount')
      this.props.fetchCats();
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

const mapStateToProps = state => {
  console.log('in map state to props')
  return {
    catPics: state.cats.pictures
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch);
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
