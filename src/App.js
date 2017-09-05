import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux';
import CatList from './CatList'

export class App extends Component {   
  componentDidMount(){
    if (this.props.catPics.length === 0) {
      this.props.fetchCats()
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
  return { catPics: state.pictures };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}
 
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

