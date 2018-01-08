import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux';

export class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const { catPics } = this.props;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={catPics} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCats: fetchCats }, dispatch);
};

const mapStateToProps = state => {
  console.log(state);
  return { catPics: state.cats.pictures };
};

export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App);
