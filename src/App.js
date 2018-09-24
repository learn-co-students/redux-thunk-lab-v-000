import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {fetchCats} from './actions/catActions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.handleOnClick}>CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}


function mapStateToProps(state){
  return { loading: state.loading, pictures: state.pictures}

}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
