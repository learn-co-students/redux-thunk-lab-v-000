import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component { 

  componentDidMount() {
    this.props.fetchCats()
  }
  

  render() {
    
    console.log(this.props)
    
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>CatBook</h1>
              <br />

              <CatList catPics={this.props.pictures} loading={this.props.loading} />

            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loading: state.cats.loading,
    pictures: state.cats.pictures
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

