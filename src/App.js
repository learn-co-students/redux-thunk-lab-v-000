import React, { Component } from "react";
// connect allows us to read from our redux store
import { connect } from "react-redux";
// import fetchCats
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchCats();
  }
  render() {
    // console.log(this.props.catPics, this.props.loading);
    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

// map state to props
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
