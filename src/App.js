import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              {console.log(this.props.catPics)}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('mounting successful')
      this.props.fetchCats();
    }
  }  
}


const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  };
}

export default connect(mapStateToProps, { fetchCats })(App);

