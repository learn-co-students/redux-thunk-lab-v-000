import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats
  }

  render() {
    debugger
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"></a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({pictures}) => ({pictures})

const mapDispatchToProps = dispatch => ({
  fetchCats: dispatch(fetchCats())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

