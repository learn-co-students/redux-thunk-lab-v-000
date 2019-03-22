import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';

import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  
  componentDidMount() {
    if(this.props.catPics.length === 0) {
      this.props.fetchCats()
   }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            
               <a>CatBook</a>
            
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

         <CatList catPics={this.props.catPics}/>
      
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
   }

function mapStateToProps(state) {
  return { cats: state.cats} 
}
//catPics: state.cats.pictures 

export default connect(mapStateToProps, mapDispatchToProps)(App)

