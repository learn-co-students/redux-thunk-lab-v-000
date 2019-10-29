//set up the App component to read from our Redux store - connect
// connect calls mapStateToProps passing in the state from the Redux store.

import React, { Component } from 'react';
import CatList from './CatList';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    console.log("this.props: ",this.props)
    this.props.fetchCats()
  }

  render() {
    console.log("this.props.catPics: ",this.props.catPics) // log will fire every time App renders
    console.log("this.props.loading: ",this.props.loading)

    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} loading={this.props.loading}/>
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
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
