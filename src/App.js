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
    const arrCatData = this.props.cats.pictures

    let catPics
  
    if (arrCatData.length > 0) {
      catPics = arrCatData[0]
    } else {
         catPics = arrCatData
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