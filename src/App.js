import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {
  
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchCats();
  };
  
  render() {
    // console.log(this.props.loading)
    // debugger;
    let pageContent;

    if (this.props.loading) {
      pageContent = <h1>Loading...</h1>;
    } else {
      pageContent =
        <div className="App">
          <h1>CatBook</h1>
          <CatList catPics={this.props.catPics} />
        </div>;
    }

    return pageContent;
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch( fetchCats() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

