import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions/catActions'
import {CatList} from './CatList'

class App extends Component {

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
        <CatList catPics={ this.props.catPics }/>
      </div>
    );
  }

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      this.props.actions.fetchCats()
    }
  }
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(App)
