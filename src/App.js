import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
 
class App extends Component {
 
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }
 
  render() {
    console.log(this.props.catPics) // log will fire every time App renders
    
    let page;

    if (this.props.loading) {
      page = <h1>Loading.........</h1>;
    } else {
      page = 
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} />
      </div>
    }

    return (
      page
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