import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  
  componentDidMount() {
    console.log('inside componentDidMount');
    this.props.fetchCats()
  }

  render() {
    console.log('[APP_COMPONENT]: ', this.props.catPics)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ cats }) => ({ catPics: cats.pictures })

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => { dispatch(fetchCats()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

