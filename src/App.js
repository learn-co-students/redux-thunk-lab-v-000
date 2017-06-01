import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import { bindActionCreators } from 'redux';

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
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.pictures} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pictures: state.pictures }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
