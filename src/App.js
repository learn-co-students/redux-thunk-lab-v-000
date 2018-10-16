import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import { connect } from 'react-redux'
import * as fetchCats  from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    // const {cats} = this.props
    // debugger;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }

  
}

const mapDispatchToProps = dispatch => {
  // debugger;
  return {fetchCats: () => dispatch(fetchCats)}
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}




export default connect(mapStateToProps, mapDispatchToProps)(App)

