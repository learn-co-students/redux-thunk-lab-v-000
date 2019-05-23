import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';


class App extends Component {

  componentDidMount () {
    this.props.fetchCats();
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
        <CatList catPics={this.props.catPics}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // state.cats.pictures because the rootReducer calls the catReducer 'cat'
    catPics: state.cats.pictures
  }
}

const mapDispatchToProps = ({
 fetchCats
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
