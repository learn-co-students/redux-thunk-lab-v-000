import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

export class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <button>CatBook</button>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} loading={this.props.loading}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.pictures ? state.pictures : [],
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

