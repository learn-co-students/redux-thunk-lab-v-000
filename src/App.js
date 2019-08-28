import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {   
  
componentDidMount(){

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
      </div>
    );
  }
}

function mapStateToProps(state){
  return { cats: state.cats.pictures }
}

function mapDispatchToProps(dispatch) {		
  return { fetchCats: () => dispatch(actions.fetchCats())}
}

// export default App
export default connect(mapStateToProps, mapDispatchToProps)(App)

