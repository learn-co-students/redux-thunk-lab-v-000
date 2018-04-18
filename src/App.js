import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap'

class App extends Component {

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats }
}

export default connect(mapStateToProps)(App)

