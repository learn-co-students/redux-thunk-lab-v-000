import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    // this.props.getCats
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
        <CatList 
          catpics={this.props.catPics}
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
    getCats: dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

