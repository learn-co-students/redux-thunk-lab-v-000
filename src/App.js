import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import { connect } from 'react-redux'
import {fetchCats}  from './actions/catActions'

export class App extends React.Component {   

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log("this.props.catPics")
      this.props.fetchCats()
    }
  }
  
  render() {
    const {cats} = this.props
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
      </div>
    );
  }

  
}

// const mapDispatchToProps = (dispatch) => {
//   return {fetchCats: this.props.fetchCats()}
// }

const mapStateToProps = state => {
  return {catPics: state.pictures}
}




export default connect(mapStateToProps, {fetchCats})(App)

