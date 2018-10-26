import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchCats} from './actions/catActions.js';
import CatList from './CatList.js';

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats();
    console.log("App Mounted")
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

export default connect(mapStateToProps, {fetchCats})(App)

