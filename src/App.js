import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import fetchCats from './actions/catActions'

export class App extends Component {   

  componentDidMount() {
    fetchCats()
  }
 
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}
 
function mapStateToProps(state){
  return {catsPics: state.catPics}
}
 
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)


