import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class App extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.handleClick}>CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
