import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component { 
  
  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              {this.props.pictures.length === 0 ? <p>loading...</p> : <CatList catPics={this.props.pictures}/>}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.pictures
}


const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

