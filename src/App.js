import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import * as actions from './actions/catActions'
import { connect } from 'react-redux'

class App extends Component {
  handleOnClick = () => {

  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.handleOnClick}>CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({ state })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats
  }
}

export default connect()(App)
