import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import CatList from './CatList'
import { fetchCats } from './actions/catActions';


class App extends Component {   

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
              <p>{this.state}</p>
              <CatList catPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({catPics: state.pictures})

export default connect({mapStateToProps}, { fetchCats })(App)
