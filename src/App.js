import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    // debugger
    this.props.dispatch(fetchCats());
  }

  render() {
    console.log('in App - this.props', this.props)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              {/* <CatList  catPics={catPics}/> */}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (cats) => {
  return { catPics: cats }
}

export default connect(mapStateToProps, { fetchCats })(App)

