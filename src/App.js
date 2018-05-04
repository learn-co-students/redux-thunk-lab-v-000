import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux';
import CatList from './CatList';

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

// App will render a child presentational component, CatList, which will recieve the list of cat pics from App and render them in a series of <img> tags.

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({		
    fetchCats: fetchCats
  }, dispatch);		
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

//export default App

