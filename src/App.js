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
    const arrCatPics = this.props.cats.pictures

    let catPics
  
    if (arrCatPics.length > 0) {
      catPics = arrCatPics[0]
    } else {
         catPics = arrCatPics
        }
    
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