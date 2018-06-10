import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'; 
import { bindActionCreators } from 'redux';
import {fetchCats} from './actions/catActions'; 
import CatList from './CatList';

export class App extends Component {   
  
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('Cats can play fetch too!')
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
              <CatList catPics={this.props.catPics} /> 
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar> 
      </div> 
    );
  }
};

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  };
}

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    fetchCats: fetchCats}, dispatch);
};

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);

