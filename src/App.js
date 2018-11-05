import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'
class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
            <CatList catPics={this.props.catPics}/>
            kitties
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.kitties.pictures
  }
}


export default connect(mapStateToProps, {fetchCats})(App)