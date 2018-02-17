import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatList from './CatList';

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    // debugger;
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats
  }, dispatch);
}

const mapStateToProps = (state) => {
  return { catPics: state.cats };
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
