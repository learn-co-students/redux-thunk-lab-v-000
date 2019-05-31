import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPictures={this.props.catPictures} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ catPictures: state.catsReducer.pictures })

export default connect(mapStateToProps, { fetchCats })(App);
