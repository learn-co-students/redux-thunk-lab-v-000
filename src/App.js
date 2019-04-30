import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
// import { images } from '../cat-api/cats';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './Catlist';

class App extends Component {

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                <CatList catPics={this.props.catPics}/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
};

const mapStateToProps = ({state}) => {
  return { catPics: state.cats }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => fetchCats()
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
