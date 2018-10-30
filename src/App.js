import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from "react-redux";
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {
  componentDidMount() {
    // will always be called automatically after render gets called by component, when the component is mounting for the first time.
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
                <CatList catPics={this.props.catPics}></CatList>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

// mapStateToProps is a shorthand to access one slice of the global state of the app (kept in the redux store) via props
const mapStateToProps = state => {
  return { catPics: state.cats.pictures }
}
// mapDispatchToProps is a shorthand that lets the app component dispatch an action via props
 const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
