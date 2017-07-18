import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import CatList from './CatList'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions.js'

class App extends Component {  

  componentDidMount(){
    this.props.actions.fetchCats();
  }

  render() {
    console.log(this.props.cats)
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

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

