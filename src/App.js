import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchCats} from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    // console.log("app did mount");
    this.props.fetchCats();
  }

  render() {
    // console.log("App render, props",this.props);
    // console.log("App render, cats",this.props.catPics);     
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div>
          <CatList catPics={this.props.catPics} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}

export default connect(mapStateToProps, {fetchCats})(App)

