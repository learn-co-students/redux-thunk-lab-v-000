import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

export class App extends Component {   

  componentDidMount() {
    console.log(this.props)
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

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log('Mapping dispatch')
  return bindActionCreators({
      fetchCats: fetchCats
    }, dispatch);
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);


