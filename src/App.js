import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import fetchCats from './actions/catActions'
import CatList from './CatList'


class App extends Component {

  componentDidMount() {
    debugger
    // this.props.fetchCats()
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

export default connect(state => ({ catPics: state.cats.pictures }), {fetchCats}) (App)
