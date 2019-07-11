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
              <a href="#">CatBook</a>
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
  // debugger
  return {
    loading: state.loading,
    pictures: state.pictures
  }
}

function mapDispatchToProps(dispatch){
  return { 
    fetchCats: () => dispatch( fetchCats() ) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

