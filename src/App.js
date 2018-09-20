import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList';
import  { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux'

class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats();
   
  }

  render() {
   debugger

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
     
         <CatList catPics={this.props.cats}/> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchCats: () => dispatch(fetchCats()) }
}

const mapStateToProps = state => {

  return { cats: state.cats };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

