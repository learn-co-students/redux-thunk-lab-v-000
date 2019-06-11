import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import fetchCats from './actions/catActions'
import CatList from './CatList'


class App extends Component {   
  constructor(props) {
    super(props)
    this.state = {
      catPics: []
    }
  }

  componentDidMount() {
    const cats = this.props.fetchCats()
    this.setState({
      catPics: cats
    })
    console.log('cats: ', cats)
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
        <CatList catPics={this.state.catPics}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => {
      dispatch(fetchCats())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

