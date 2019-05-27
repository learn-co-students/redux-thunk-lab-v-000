import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions'

export class App extends React.Component {
  // componentDidMount will always be called automatically after
  // render gets called by our component.

  componentDidMount() {
    if (this.props.catPics.length === 0){
      this.props.actions.fetchCats()
    }
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


  function mapStateToProps(state) {
    return {catPics: state.cats.pictures}
  }

  function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
  }

  // function mapDispatchToProps(dispatch){
  //   return {
  //     fetchCats: (cats) => {dispatch({type: 'FETCH_CATS', cats: cats })}
  //   }
  // }

export default connect(mapStateToProps, mapDispatchToProps)(App);
