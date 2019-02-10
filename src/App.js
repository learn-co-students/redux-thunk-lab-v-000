import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'


class App extends Component {


  componentDidMount(){
    this.props.fetchCats()

  }

  handleClick=()=>{
    return("hey")
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              {console.log(this.props.catPics)}
              <a href="#" onClick={this.handleClick}>CatBook</a>

            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
  return {catPics: state.cats.pictures}
}




export default connect(mapStateToProps,{fetchCats})(App)
