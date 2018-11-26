import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import {connect} from 'react-redux'
import CatList from './CatList'


 class App extends Component {

 componentDidMount(){
  this.props.fetchCats()
}

  render() {
    console.log(this.props)
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

const mapStateToProps = state => {
  return {catPics: state.cats.pictures}
}

export default connect(mapStateToProps, {fetchCats})(App)
