import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatList from './CatList';
import fetchCats from './actions/catActions';

class App extends Component {

  compnentDidMount() {
    const catPics = this.props.fetchCats();
    this.setState({ pictures: catPics })
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  catPics: state.catPics
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
