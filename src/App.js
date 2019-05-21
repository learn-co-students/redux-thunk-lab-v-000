import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'

import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {

  state = {
    cats: []
  }

  componentDidMount(){
    const catPics = this.props.fetchCats()
    console.log("i am in componentDidMount")
    this.setState({
      cats: catPics
    })
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
        <CatList catPics={this.props.cats} />
      </div>
    );
  }
}

const mapStateToProps = state => ({cats : state.cats })

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
