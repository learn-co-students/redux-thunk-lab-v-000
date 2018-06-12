import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

export class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats()
  }

  displayCats=(event)=>{
    event.preventDefault()
    this.props.clicked = "true"
  }

  render() {
    
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.displayCats}>CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps=({pictures})=>{
  return {
    catPics: pictures
  }
}
 
const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({fetchCats: fetchCats}, dispatch)
} 
export const WrapperApp = connect(mapStateToProps, mapDispatchToProps)(App)

