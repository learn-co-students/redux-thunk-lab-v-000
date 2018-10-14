import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import { connect } from 'react-redux'
import {fetchCats}  from './actions/catActions'

class App extends Component {   
  
  render() {
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

  componentDidMount() {
    this.props.fetchCats()
  }
}

function mapDispatchToProps(dispatch) {
  return {fetchCats: () => dispatch(fetchCats())}
}




export default connect(null, mapDispatchToProps)(App)

