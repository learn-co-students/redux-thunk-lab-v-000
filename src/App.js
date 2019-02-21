import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CatList from "./CatList";
import fetchCats from "./actions/catActions.js";

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
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catPics: state.cats.pictures
});

const mapDispatchToProps = dispatch => ({
  fetchCats: cats => dispatch({ type: "FETCH_CATS", cats })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
