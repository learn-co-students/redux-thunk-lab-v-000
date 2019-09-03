import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar} from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
class App extends Component {


  componentDidMount() {
  this.props.fetchCats2()
  console.log(this.props)
    }

checkLog(props){
  console.log(props.cats)

}

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <button onClick={()=>{this.checkLog(this.props)}}>Log</button>
              <CatList catPics={this.props.cats.pictures}/>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cats: state.cats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats2: () => {
      dispatch(fetchCats())
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
