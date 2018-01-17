import React, { Component } from 'react';
import * as actions from ' ./actions/catActions.js'
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class App extends Component {   
  
  componentDidMount() {
    if (this.props.catPics.length === 0){
      this.props.actions.fetchCats();
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats.pictures
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

