import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchCats} from './actions/catActions'

export class App extends Component {
  componentDidMount(){
    if(this.props.catPics.length===0){
      this.props.fetchCats()
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    catPics: state.cats.pictures
  })
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchCats: fetchCats
  }, dispatch)
}
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)
