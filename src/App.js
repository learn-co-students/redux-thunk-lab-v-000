import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions'
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'

export class App extends Component {

  componentDidMount() {
    fetchCats()
  }

  render() {

    const { fetchCats, catPics } = this.props

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
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}


export const WrapperApp =  connect(mapStateToProps, { fetchCats })(App)
