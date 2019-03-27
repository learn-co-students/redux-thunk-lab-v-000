import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux';
import CatList from './CatList';
import {fetchCats} from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    debugger
    this.props.fetchCats()
  }
  
  render() {
    debugger
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.pictures.pictures}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({ pictures: state.pictures })

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

