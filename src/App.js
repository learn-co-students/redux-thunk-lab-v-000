import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'
import CatList from './CatList'

class App extends Component {
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.addCats();
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
}

const mapStateToProps = state => {
  return { catPics: state.cats }
}

const mapDispatchToProps = dispatch => {
  return { addCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

