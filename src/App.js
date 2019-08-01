import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchCats }from './actions/catActions'
import CatList from './CatList'



class App extends Component {

  componentDidMount = () => {
     this.props.fetchCats();
  }

  render() {
console.log(this.state)
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


const mapStateToProps = (state) => {
  return {
  catPics: state.pictures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: fetchCats
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
