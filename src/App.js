import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {
  componentDidMount = () => { this.props.fetchCats() }
  // So, we want to dispatch the fetchCats function from inside our component, specifically from inside the
  // componentDidMount function.

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        {this.props.catPics.length > 0 ? <CatList catPics={this.props.catPics}/> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats.pictures };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
// We'll need to use mapDispatchToProps in order to make our fetchCats
// function dispatch-able from within our component.

export default connect(mapStateToProps, mapDispatchToProps)(App);

// We'll build out our app following the container pattern. We'll have one top-level component, App,
// that connects to the store and gets data from the state via mapStateToProps. App will render a child
// presentational component, CatList, which will receive the list of cat pics from App and render them
// in a series of <img> tags.

// Your App component should use connect and mapStateToProps to set a prop of catPics to the cats collection
// in state.

// Your container component, App, should render the presentational component, CatList. App should pass
// catPics down to CatList as a prop. CatList should iterate over the cat pics and display each cat pic
// in an image URL. Remember to use debugger to take a look at the catPics collection and determine which
// property of each catPic object you will use to populate your <img> tag and render the image.
