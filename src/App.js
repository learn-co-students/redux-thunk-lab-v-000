import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux';
import fetchCats from './actions/catActions';

// import the action creator fetchCats. send it through the connect function below to call it from props, wrapped in the dispatch.

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
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

