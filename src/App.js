import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

const mapStateToProps = ({ cats }) => ({ cats });

export default connect(mapStateToProps, { fetchCats })(App);
