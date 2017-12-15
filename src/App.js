import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import CatList from './CatList'
import {fetchCats} from './actions/catActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export class App extends Component {

  componentDidMount(){
    if (!this.props.catPics.length) {
      console.log(this.props);
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
        <div className="CatList">
          <CatList catPics={this.props.catPics} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    catPics: state.cats.pictures
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCats}, dispatch)
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
