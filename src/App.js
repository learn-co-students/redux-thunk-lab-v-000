import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={["test", "test2"]} fetchCats={this.props.fetchCats}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: fetchCats
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

