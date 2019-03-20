import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://localhost:4000/db">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}

function mapStateToProps(state){
  return {cats: state.cats}
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
