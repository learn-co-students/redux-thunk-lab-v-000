import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { fetchCats } from './actions/catActions';
import { CatList } from './CatList';

class App extends Component {   
  
  componentDidMount() {
    // fetch the cats
    this.props.fetchCats();
  }
  
  render() {
    const catPics = this.props.catPics;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  bindActionCreators({fetchCats: fetchCats}, dispatch)
}

function mapStateToProps(state){
  return {catPics: state.cats}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)

//export default App

