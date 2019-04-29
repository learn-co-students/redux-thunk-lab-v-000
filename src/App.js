import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
// import { images } from '../cat-api/cats';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';

class App extends Component {

  componentDidMount() {
    fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">

              </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
};

const mapStateToProps = ({state}) => { state };

export default connect(mapStateToProps)(App);
