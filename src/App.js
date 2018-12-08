import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
import {bindActionCreators } from 'redux';

class App extends Component {


  componentDidMount() {
    // const cats = fetchCats()
    // cats(this.props.dispatch)
    this.props.fetchCats()
  }



  render() {
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
const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}


const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
