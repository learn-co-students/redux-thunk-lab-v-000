import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {fetchCats} from './actions/catActions'
import {connect} from 'react-redux'

class App extends Component {

componentDidMount() {
  this.props.fetchCats()
}
/*Equals to
return { fetchCats: () => dispatch(fetchCats()) }
*/
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

export default connect(mapStateToProps, {fetchCats})(App)


 // We'll build out our app following the container pattern. We'll have one top-level component, App, that connects to the store and gets data from the state via mapStateToProps. App will render a child presentational component, CatList, which will receive the list of cat pics from App and render them in a series of <img> tags.
