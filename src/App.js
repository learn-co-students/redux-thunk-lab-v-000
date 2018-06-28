import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CatList from './CatList';
import fetchCats from './actions/catActions';

export class App extends Component {

  compnentDidMount() {
    // if (this.props.catPics === []){
    //
    // }
    const catPics = this.props.actions. fetchCats();
    this.setState({ pictures: catPics })
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

const mapStateToProps = (state) => {
  return {
  catPics: state.cat.pictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
