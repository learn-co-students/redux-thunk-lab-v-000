import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/catActions.js';
import CatList from './CatList.js';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} />
      </div>
    );
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
    fetchCats: () => dispatch(actions.fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
