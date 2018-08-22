import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import {Navbar} from 'react-bootstrap'

export class App extends React.Component {

  componentDidMount() {
    if (this.props.catPics.length === 0){
      this.props.fetchCats()
    }
  }

  render() {
    const { cats } = this.props

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

const mapStateToProps = state => {
  return {
    catPics: state.pictures
  }
}

// const mapDispatchToProp = (dispatch) => {
//   return {
//     fetchCats: this.props.fetchCats()
//   }
// }

export default connect(mapStateToProps, { fetchCats })(App)
