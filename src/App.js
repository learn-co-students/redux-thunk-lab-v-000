import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
<<<<<<< HEAD
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  componentDidMount() {
    this.props.fetchCats()
  }

=======
import {connect} from 'react-redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    this.props.getCats()
  }
  
>>>>>>> labRequirements
  render() {
    console.log('[APP_COMPONENT]: ', this.props.catPics.pictures)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
<<<<<<< HEAD
        <CatList catPics={this.props.catPics} /> 
=======
        <CatList 
          catPics={this.props.catPics.pictures}
        />
>>>>>>> labRequirements
      </div>
    );
  }
}

const mapStateToProps = state => {
<<<<<<< HEAD
  return {catPics: state.cats}
=======
  return {
    catPics: state.cats
  }
>>>>>>> labRequirements
}

const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    fetchCats: () => {
=======
    getCats: () => {
>>>>>>> labRequirements
      dispatch(fetchCats())
    }
  }
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(App)
=======
export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> labRequirements

