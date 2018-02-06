import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CatList from './CatList';
import { fetchCats } from './actions/catActions'

export class App extends Component {
  componentDidMount() {
      if (this.props.catPics.length === 0) {
       console.log('in component did mount')
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

function mapDispatchToProps(dispatch){
  bindActionCreators({fetchCats: fetchCats}, dispatch)
}

function mapStateToProps(state){
  return {cats: state.cats}
}

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
