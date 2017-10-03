import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions';

export class App extends Component {  
  constructor() {
    super()
      this.state = {
        cats: []
      }
  }
  
  componentDidMount() {
    this.setState({ 
      cats: this.props.fetchCats()
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
        
        <CatList catpics={ this.props.cats }/>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch) {
  bindActionCreators({fetchCats: fetchCats}, dispatch)
}

const mapStateToProps = function(state) {
  return { cats: state.cats }
}

export const WrapperApp =  connect(mapStateToProps, mapDispatchToProps)(App)

