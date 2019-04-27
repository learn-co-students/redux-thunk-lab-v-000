import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
// import { images } from '../cat-api/cats';
import { connect } from 'react-redux';

class App extends Component {

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
