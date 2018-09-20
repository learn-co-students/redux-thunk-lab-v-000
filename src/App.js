import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import  {fetchCats} from './actions/catActions';
import {connect} from 'react-redux';
import CatList from './CatList';

class App extends Component {   
  
  componentDidMount(){
    this.props.fetchCats();
    console.log(cats)
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
     
        <CatList catPics={cats}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {fetchCats: () => dispatch(fetchCats())}
}

function mapStateToProps(state){
  return {cats:state.cats};
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

