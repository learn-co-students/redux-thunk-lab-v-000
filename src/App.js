import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList.js'


class App extends Component {

  componentDidMount(){
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
                <CatList catPics={this.props.cats.pictures} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mstp:", state)
  return ({
    cats: state.cats
  })
}


export default connect(mapStateToProps, { fetchCats })(App)
