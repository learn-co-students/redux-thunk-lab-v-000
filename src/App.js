import React, { Component } from 'react';
import { connect } from "react-redux";
import {Navbar} from 'react-bootstrap';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

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
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        {this.props.loading ? <h2>Loading...</h2> : <CatList catPics={this.props.cats}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.pictures,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => {
      dispatch(fetchCats());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

