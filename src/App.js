import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from './actions/catActions'
import { bindActionCreators } from 'redux';
import CatList from './CatList'


class App extends Component {

  componentDidMount(dispatch) {
    this.props.fetchCats()
  }

  render() {
    console.log("App")
    console.log(this.props.catPics)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCats: bindActionCreators(actions.fetchCats, dispatch)
})

const mapStateToProps = (state) => {
  return ({ catPics: state.cats.pictures })
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
