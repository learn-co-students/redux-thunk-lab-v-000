import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from '../src/CatList'


class App extends Component { 
  
  componentDidMount(){
    console.log('component did mount')
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.catPics)
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

function mapDispatchToProps(dispatch){
  return {fetchCats: () => dispatch(fetchCats())}
}

function mapStateToProps(state){
  return {catPics: state.cats.pictures}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

