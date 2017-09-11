import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import fetchCats from './actions/catActions'
import { bindActionCreators } from 'redux'
import CatList from './CatList'


export class App extends Component {

    // componentDidMount() {
  //    fetch the cats
  //   this.props.fetchCats();
  // }  
  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchCats()
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
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}



const mapStateToProps = (state) => { 
  return { catPics: state.cats.pictures };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
