import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  // always be called automatically when the component is mounting for the first time. 
  // This is the perfect place to go and get the cat pics.
  componentDidMount() {
    // calls our fetchCats() action creator. 
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}
// This function will be passed into connect. 
// Any key/value pairs returned by mapStateToProps() will become props in the App component.
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
// make fetchCats() available
// We can then access the function as this.props.fetchCats() inside the component and call this when the component mounts:
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
// connect calls this function, passing in the state from the Redux store.
// Any key/value pairs returned by mapStateToProps() will become props in the App component.
export default connect(mapStateToProps, mapDispatchToProps)(App)

// We can use this set up to confirm Redux is correctly creating its initial state and that we're able to access that state in our React components.

