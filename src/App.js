import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions';

class App extends Component {   
  
  componentDidMount() {
    //fetch the cats; this function will always be called after render gets called by our component, when component is mounting for first time
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.fetchCats)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
       
      </div>
    );
  }
}

// cat pics to be fetched when App is first loaded up
const mapStateToProps = state => {
  return {
    catPics: state.cats.pictures
  }
}



export default connect(mapStateToProps, {fetchCats})(App)

