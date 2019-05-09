import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions.js';

class App extends Component {   

  componentDidMount(){
    // if (this.props.catPics.length === 0){
    //   console.log('in component did mount');
      this.props.fetchCats();
    // };
  };
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
          <CatList catPics={this.props.catPics} />
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({cats}) => {
  console.log('in map state to props');
  return {catPics: cats.pictures};
};

export default connect(mapStateToProps, { fetchCats })(App);

