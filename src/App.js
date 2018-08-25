import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

export class App extends Component {   

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.fetchCatPics();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats_reducer.pictures
  }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchCatPics: () => dispatch(fetchCats())
    }
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);


