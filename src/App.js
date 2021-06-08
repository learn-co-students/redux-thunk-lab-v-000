import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
class App extends Component {   
  
  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.catPics)
    // console.log(this.props.loading)
    this.props.fetchCats()
  }

  render() {
    // console.log(this.props.catPics) // log will fire every time App renders
    // console.log(this.props.loading)
    if (this.props.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>CatBook</h1>
          <CatList catPics={this.props.catPics} />
        </div>
      );
    }
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

