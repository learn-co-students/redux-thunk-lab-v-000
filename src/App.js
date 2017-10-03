import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';

export class App extends Component {  
  constructor() {
    super()
      this.state = {
        cats: []
      }
  }
  
  componentWillMount() {
    this.setState({ 
      cats: this.props.store.dispatch(fetchCats())
    });
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
        
        <CatList/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: fetchCats
  }
}

export const WrapperApp =  connect(null, mapDispatchToProps)(App)

