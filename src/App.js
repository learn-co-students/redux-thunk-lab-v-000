import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }

  renderCatList = () => {
    return this.props.pictures.map(cat => {
      return <CatList catImage={cat} />
    })
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <p>{this.renderCatList()}</p>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}
 
function mapStateToProps(state){
  return { pictures: state.pictures }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)

