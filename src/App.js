import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

export class App extends Component {   
  
  componentDidMount() {
    // fetch the cats
    this.props.fetchCats();
  }
  
  render() {
    //const catPics = this.props.catPics;
    //console.log("App state")
    //console.log(this.state)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}

function mapStateToProps(state){
  return {catPics: state.cats.pictures}
}
 
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

//export default App

