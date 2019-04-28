import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap'

 import { connect } from 'react-redux';

 import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {

    componentDidMount() {
      this.props.fetchCats()
     }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.cats}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cats: state.cats.pictures
  }
}

export default connect(mapStateToProps, { fetchCats })(App)
