import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

import { connect } from 'react-redux';

import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  componentDidMount() {
    // this.props.loadingCats()
    this.props.fetchCats()
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
        <CatList catPics={this.props.cats}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats.pictures
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     loadingCats: cats => dispatch({ type: 'LOADING_CATS', cats }),
//     fetchCats: cats => dispatch({ type: 'FETCH_CATS', cats })
//   }
// }

export default connect(mapStateToProps, { fetchCats })(App)