import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component { 
  
  // componentDidMount will guarantee that there’s a component to update.

  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    
    const cats = this.props.cats.map(cat => <li key={cat.id}>{cat.name}</li>);
    
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        
        <CatList catPics={this.props.catPics} />
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {catPics: state.catReducer.pictures}

}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
