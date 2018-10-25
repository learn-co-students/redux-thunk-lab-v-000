import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'
import CatList from './CatList'

class App extends Component {
  componentDidMount() {
    fetchCats();
  }   
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics} fetchCats={this.props.fetchCats} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  catPics: state.cats[0]
}

const mapDispatchToProps = fetchCats => {
  fetchCats();
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

