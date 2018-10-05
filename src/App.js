import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'
export default class App extends Component {

  componentDidMount() {
    console.log('Component Did Mount')
    this.props.fetchCats()
  }
  render() {

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

const mapStateToProps = (state) => {
  console.log(state)
  return {catPics: state.cats.pictures}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats,
  }. dispatch)
}

export const wrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
