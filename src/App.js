import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {fetchCats} from './actions/catActions.js'

class App extends Component {

  componentDidMount() {
    if (this.props.catPics.length === 0) {
      console.log('componentDidMount in action')
      this.props.fetchCats()
    }
  }

  render() {
    console.log("render App in action")
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

function mapStateToProps(state) {
  console.log("mapStateToProps in action")
  return {catPics: state.cats.pictures}
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps in action")
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
