import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

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
              <a href="#"><CatList catPics={this.props.catPics}/></a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const  mapDispatchToProps = (dispatch) => {
   return { fetchCats: () => dispatch(fetchCats()) }
} 
 
const mapStateToProps = (state) => {
  return {catPics: state.cats_reducer.pictures}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

