import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCatsAPI;
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              {/* <CatList catPics={this.props.catPics} /> */}
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ catPics }) => ({ catPics });

const mapDispatchToProps = dispatch =>
  dispatch({
    type: "FETCH_CATS",
    fetchCatsAPI: () => fetchCats()
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
