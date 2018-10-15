import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList cats={this.props.catPics} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { catPics: state.cats }
}


function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
//export default connect(mapStateToProps)(App)

