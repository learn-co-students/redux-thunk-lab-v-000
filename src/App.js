import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';
import {connect} from 'react-redux';

class App extends Component {   
  
  componentDidMount(){
    if (this.props.catPictures.length === 0) {
      this.props.fetchCats();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPictures} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { catPictures: state.cats.pictures};
};

export default connect(mapStateToProps, {fetchCats})(App);
