import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'

class App extends Component {   
    
componentDidMount() {
  this.props.getCats()
}
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catInfo}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catInfo: state.cats.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCats: () => dispatch(fetchCats())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

