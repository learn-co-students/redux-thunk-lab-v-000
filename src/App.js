import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    // fetch the cats
//    debugger

    this.props.fetchCats()
  }

  render() {
//	  debugger
	  const { catPics } = this.props

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
	      <CatList catPics={ catPics } />	      
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  };
}

//add arguments to connect as needed
export default connect(mapStateToProps, { fetchCats })(App);//mapDispatchToProps)(App);


