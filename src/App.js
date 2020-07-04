import React, { Component } from 'react';
import { connect } from 'react-redux'

import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {this.props.loading ? <p>...loading</p> : null}
        {<CatList catPics={this.props.catPics} ></CatList>}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchCats()
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

