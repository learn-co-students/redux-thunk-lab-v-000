import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    this.props.getCats()
  }
  
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
        <CatList 
          catPics={this.props.catPics.pictures}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCats: () => {
      dispatch(fetchCats())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

