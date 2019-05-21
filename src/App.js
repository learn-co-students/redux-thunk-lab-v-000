import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const catList = this.props.catPics ? (
      <CatList catPics={this.props.catPics} />
    ) : (
      <p>Is Loading...</p>
    );
    if (this.props.catPics) {
      return (
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">CatBook</a>
                {catList}
                {console.log("is loading")}
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </div>
      );
    }
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <p>Is Loading...</p>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catPics: state.catsReducer.pictures };
};

export default connect(
  mapStateToProps,
  { fetchCats }
)(App);
