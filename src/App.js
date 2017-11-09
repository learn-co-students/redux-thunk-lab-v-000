import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'



export class App extends React.Component {

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
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {catsPics: state.cats.pictures}
}


function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({fetchCats: fetchCats}, dispatch)}
}


export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
