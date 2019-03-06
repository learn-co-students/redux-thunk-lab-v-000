import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount(){
    this.setState(this.props.fetchCats())
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
        <CatList catPics={this.props.cats.pictures} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  debugger
  return {cats: state.cats}
}

const mapDispatchToProps = dispatch =>{
  return {fetchCats: () => dispatch(fetchCats())}
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
