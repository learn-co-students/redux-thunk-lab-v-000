import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList'

class App extends Component {   
  
  render() {    
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar >
        {/* <CatList  catPics={this.props.pictures}/> */}
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:4000/db').then(response => {
      return response.json()
    }).then(responseJSON => {
      return responseJSON.images
    })
  }
}


 const mapStateToProps = (state) => {
  return { pictures: state.pictures};
};


export default connect(mapStateToProps)(App);




