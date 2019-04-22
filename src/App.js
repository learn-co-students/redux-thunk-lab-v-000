import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import fetchCats from './actions/catActions';

class App extends Component {

  componentDidMount() {
    console.log('app mounted')
    const cats = this.props.fetchCats()
    this.setState({
        pictures: cats
      })
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
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.catsReducer.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return { fetchCats: () => dispatch(fetchCats())}
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

