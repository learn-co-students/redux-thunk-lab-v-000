import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCats from './actions/catActions'
import CatList from './CatList'
import {Navbar} from 'react-bootstrap'

class App extends Component {  

  state = {
    loading: false,
    pictures: []
  } 

  componentDidMount = () => {
    this.props.dispatch(fetchCats())
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
        <CatList  />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats
  } 
}

export default connect(mapStateToProps)(App)

