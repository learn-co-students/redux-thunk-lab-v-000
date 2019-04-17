/*
  TO GET CATS DATA FOR THIS APP:
  flatiron_school_labs/react_redux_labs/cats-api (in a separate server)
  npm install & npm start
  (Point browser to http://localhost:4000/db to see a 
   JSON collection of 20 cat image objects)
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchCats from './actions/catActions'
import CatList from './CatList'
import {Navbar} from 'react-bootstrap'

class App extends Component {  

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    const catPics = this.props.cats.pictures
   
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={catPics}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cats: state.pictures
  } 
}

export default connect(mapStateToProps, { fetchCats })(App)

