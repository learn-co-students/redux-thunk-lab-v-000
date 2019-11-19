import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats} from './actions/catActions'

class App extends Component {   



  /*
  We need to define our componentDidMount() function so 
  that it calls our fetchCats() action creator. We also need to write out a
   mapDispatchToProps() function to make fetchCats() available. We can then access the
   function as this.props.fetchCats() inside the 
   component and call this when the component mounts:
  */

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  
  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <div className="App" />
        <h1>CatBook</h1>
        {/* add CatList component here */}
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
 
export default  connect(mapStateToProps, mapDispatchToProps)(App)

