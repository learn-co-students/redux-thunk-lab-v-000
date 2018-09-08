import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import CatList from './CatList'

import { fetchCats } from  './actions/catActions';
//import * as actions from './actions/catActions.js'

export class App extends Component {

  componentDidMount() {
     this.props.fetchCats()
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
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


//const mapStateToProps = ({ cats }) => ({ cats })

const mapStateToProps = (state) => {
  return { catPics: state.cats.pictures }
  //its cats.pictures, vs just .pictures because of the combiner
}

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
//export default App
