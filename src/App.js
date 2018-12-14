import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList'
import { fetchCats } from './actions/catActions';
import { connect } from 'react-redux'

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
              <a href="#">CatBook</a>
              <CatList cats={this.props.cats} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Mapped :', state)
  return {
    cats: state.cats
  }
}


export default connect(mapStateToProps, {fetchCats})(App)
