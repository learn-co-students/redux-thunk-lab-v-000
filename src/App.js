import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';
import { connect } from 'react-redux';
class App extends Component {   
  componentDidMount(){
    this.props.fetchCats();
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
  return { 
    catPics: state.cats_reducer.pictures 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: fetchCats
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

