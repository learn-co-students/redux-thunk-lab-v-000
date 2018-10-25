import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Navbar} from 'react-bootstrap'
import fetchCats from './actions/catActions'
import CatList from './CatList'
class App extends Component {

  componentDidMount(){
    this.props.fetchCats
  }

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
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}



function mapStateToProps(state){
  return {catPics: state.cats.pictures}
}
function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
