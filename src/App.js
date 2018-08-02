import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions.js'
import CatList from './CatList.js';

export class App extends Component {

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
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

App.defaultProps = {
  catPics: [],
}

function mapDispatchToProps(dispatch) {
  return { fetchCats: () => dispatch(fetchCats()) }
}

function mapStateToProps(state) {
  return { catPics: state.cats.pictures }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


