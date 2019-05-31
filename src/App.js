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
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  return {
    catPics: state.cats.pictures
  };
};

// const mapDispatchToProps = dispatch => {
//   return { fetchCats: images => dispatch({ type: "FETCH_CATS", images }) };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCats: () => {
//       dispatch(fetchCats());
//     }
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(fetchCats, dispatch)
//   };
// };

export default connect(
  mapStateToProps,
  { fetchCats }
)(App);
