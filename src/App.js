import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
import {Navbar} from 'react-bootstrap'

class App extends Component {  

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {

    let catPics

    if (this.props.cats.pictures.length > 0) {
        catPics = this.props.cats.pictures[0]
    } else { catPics = this.props.cats.pictures }

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
