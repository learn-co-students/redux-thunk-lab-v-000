// ***STEP 4: Build the Container Component. Now that Redux and Thunk are set up, 
// it is time to display the retrieved data in our app. 

// 1. Set up the App component to read from our Redux store. 
// 2. Import connect from react-redux, wrapping the function around App on the export line. 
// 3. Write a mapStateToProps() helper function. This function will be passed into connect. 
// 4. Connect calls this function, passing in the state from the Redux store. 
// 5. Any key/value pairs returned by mapStateToProps() will become props in the App component. 
// 6. We can use this set up to confirm Redux is correctly creating its initial state and that 
// we're able to access that state in our React components.
// 7. You should see an empty array logged in the console when the app is launched. 
// This is the empty cats array in our initial state, now mapped to this.props.catPics in App.
// 8. Dispatch the fetchCats Action to get all the cat pics into state. 

// **DISPATCH FETCHCATS**
// 1. We want our cat pics to be fetched when the App component is first loaded up. 
// 2. The componentDidMount() function will always be called automatically when the component 
// is mounting for the first time. This is the perfect place to go and get the cat pics.
// 3. We need to define our 'componentDidMount()' function so that it calls our fetchCats() action creator. 
// 4. We also need to write out a mapDispatchToProps() function to make fetchCats() available. 
// 5. We can then access the function as this.props.fetchCats() inside the component and call this when 
// the component mounts.
// 6. If we check the console, we'll see that this.props.catPics is set to [] on the first two renders, 
// but on the third, we see an array of 20 cat objects. We still can call dispatch here, 
// even though we're also calling dispatch in our action creator.
// 7. Once you successfully fetch cats, put them in state, grab them from state and pass them to App 
// under the catPics prop, you're ready to build the CatList component.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount() {
    this.props.fetchCats()
  }
  
  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)