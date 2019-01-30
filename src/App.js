import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.fetchCats()
  }
  render() {
    const { catPics } = this.props
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}

export default connect(mapStateToProps, {fetchCats})(App)