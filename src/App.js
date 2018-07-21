import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions'
import CatList from './CatList'

export class App extends Component {

  componentDidMount(){
    this.props.actions.fetchCats()
  }

  render() {
    console.log("App", this.props)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList className="CatList" catPics={this.props.catPics.payload}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { catPics: state.cats}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
