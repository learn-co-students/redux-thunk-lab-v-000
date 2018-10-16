import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import { connect } from 'react-redux'
import fetchCats  from './actions/catActions'
import CatList from './CatList'



class App extends Component {   

  componentDidMount() {
  //  console.log(this.props.fetchCats())
    this.props.fetchCats()
  }
  
  render() {
    // const {cats} = this.props
    // debugger;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }

  
}

const mapDispatchToProps = dispatch => {
  // console.log(dispatch(fetchCats))
  return {fetchCats: () => dispatch(fetchCats())}
}

const mapStateToProps = state => {
  
  return {catPics: state.cats.pictures}
}




export default connect(mapStateToProps, mapDispatchToProps)(App)

