import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux'

class App extends Component {


  render() {
    console.log(this.props)
    const { catPics } = this.props

    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={ catPics.pictures }/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchCats()
  }
}

const mapStateToProps = ({catPics}) => {
  return ({catPics})
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => {
      let action = fetchCats()
      return dispatch(action)
    },
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(App)
