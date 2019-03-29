
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux'
import * as actions from './actions/catActions.js'

class App extends Component {

  componentDidMount() {
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


function mapStateToProps(state) {
  return { catPics: state.cats.pictures }
}

export default connect(mapStateToProps, { ...actions })(App)
