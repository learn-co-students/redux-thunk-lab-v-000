import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import Catlist  from './CatList'


class App extends Component {

  componentDidMount = () => {
    this.props.fetchCats()
  }


  render() {
    console.log(this)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#' >CatBook</a>
              <Catlist catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => {
      dispatch(fetchCats())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
